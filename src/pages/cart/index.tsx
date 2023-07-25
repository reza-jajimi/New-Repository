import CartItems from "@/src/components/Cards/CartItems";
import MainLayout from "@/src/components/Layout/MainLayout";
import { useCartContext } from "@/src/context/CartContext";
import dynamic from "next/dynamic";
import React from "react";

const CartPage = () => {
  const { state } = useCartContext();
  const { cart } = state;
  return (
    <MainLayout title="cart">
      <section className="grid grid-cols-4 gap-5">
        {cart.cartItems.length === 0 ? (
          <div>
            <h3 className="text-center text-lg">Cart is empty</h3>
          </div>
        ) : (
          <div className="col-span-4 md:col-span-3">
            {cart.cartItems.map((item: any) => (
              <CartItems key={item.id} {...item} />
            ))}
          </div>
        )}

        <div className="col-span-4 md:col-span-1"></div>
      </section>
    </MainLayout>
  );
};

export default dynamic(() => Promise.resolve(CartPage), { ssr: false });
