import React from "react";
import data from "data/productData.json";

type cartItemsProps = {
  id: string;
  qty: number;
};

const CartItems = ({ id, qty }: cartItemsProps) => {
  const product = data.find((item) => item.id === id);

  if (product == null) {
    return null;
  }

  return (
    <div className="flex items-center">
      <figure>
        <img src={product.image} alt="product" className="w-24 h-16 rounded" />
      </figure>
      <div>
        <h4 className="text-xl">{product.title}</h4>
        <h4 className="text-xl text-red-400">{product.price}</h4>
      </div>
      <p className="text-base">{qty}</p>
    </div>
  );
};

export default CartItems;
