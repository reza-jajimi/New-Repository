import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
import Cookies from "js-cookie";

type CartProviderProps = {
  children: ReactNode;
};

type CartContextType = {
  state: any;
  dispatch: Dispatch<any>;
};

const CartContext = createContext({} as CartContextType);

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const initialState = {
    cart: Cookies.get("cart")
      ? JSON.parse(Cookies.get("cart"))
      : { cartItems: [] },
  };

  function reducer(state: any, action: any) {
    switch (action.type) {
      //  ============================= ADD ITEMS ==================================
      case "ADD_ITEMS": {
        const existingItem = state.cart.cartItems.find(
          (item: any) => item.id === action.payload.id
        );
        const cartItems = existingItem
          ? state.cart.cartItems.map((item: any) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart.cartItems, { ...action.payload, qty: 1 }];

        Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));

        return { ...state, cart: { ...state.cart, cartItems } };
      }
      //  =========================== DECREASE ITEMS ================================
      case "DECREASE_ITEMS": {
        const existingItem =
          state.cart.cartItems.find(
            (item: any) => item.id === action.payload.id
          )?.qty == 1;
        const cartItems = !existingItem
          ? state.cart.cartItems.map((item: any) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty - 1 }
                : item
            )
          : state.cart.cartItems.filter(
              (item: any) => item.id !== action.payload.id
            );

        Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));

        return { ...state, cart: { ...state.cart, cartItems } };
      }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
