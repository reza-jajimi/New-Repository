import { useCartContext } from "@/src/context/CartContext";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type cardProps = {
  image: string;
  title: string;
  price: number;
  slug: string;
  id: string;
};

const MainCard: React.FC<cardProps> = ({ image, title, price, slug, id }) => {
  const { push } = useRouter();
  const { state, dispatch } = useCartContext();
  const [itemQty, setItemQty] = useState<any>([]);

  const { cart } = state;

  useEffect(() => {
    setItemQty(cart.cartItems);
  }, [cart.cartItems]);

  const AddToCartHandler = () => {
    dispatch({ type: "ADD_ITEMS", payload: { slug, id } });
  };
  const decreaseHandler = () => {
    dispatch({ type: "DECREASE_ITEMS", payload: { slug, id } });
  };

  return (
    <div className="mainCardBody">
      <div className="flip-card-inner bg-white dark:bg-gray-500 cursor-default">
        <div className="p-2 flip-card-front w-full rounded-md h-full">
          <div className="flex justify-center w-full h-[300px]">
            <img className="h-full rounded-md" src={image} alt="product" />
          </div>
          <p className="text-xl text-center font-bold">{title}</p>
        </div>
        <div className="p-2 flex flex-col justify-center items-center flip-card-back h-full ">
          <p
            className="text-xl cursor-pointer text-slate-700 font-bold mb-3"
            onClick={() => push(`/products/${slug}`)}
          >
            {title}
          </p>
          <p className="text-lg font-semibold text-red-700 mb-2 dark:text-red-500">
            {price}
          </p>
          <p
            className="text-sm text-gray-700 dark:text-gray-200 text-center cursor-pointer"
            onClick={() => push(`/products/${slug}`)}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur optio quo nostrum. Voluptates alias eaque iusto ducimus,
            molestias.
          </p>
          <div className="mt-10 w-full flex justify-center items-center">
            {itemQty.find((item: any) => item.id === id) == null ? (
              <button
                onClick={AddToCartHandler}
                className="w-5/6 cardButton bg-red-400 hover:bg-red-500 hover:shadow-lg hover:shadow-red-900/50 active:scale-95 text-white rounded-md py-2"
              >
                Add to cart
              </button>
            ) : (
              <div className="flex justify-between items-center">
                <button
                  onClick={AddToCartHandler}
                  className="w-5 py-1 bg-red-400 rounded-md active:scale-95"
                >
                  +
                </button>
                <div className="w-10 flex justify-center rounded-md">
                  <span>
                    {itemQty.find((item: any) => item.id === id)?.qty}
                  </span>
                </div>
                <button
                  onClick={decreaseHandler}
                  className="w-5 py-1 bg-red-400 rounded-md active:scale-95"
                >
                  -
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
