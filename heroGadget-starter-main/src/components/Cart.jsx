import React from "react";
import { getStoredCart } from "../utils/fakeDB";
import { useLoaderData } from "react-router-dom";

const Cart = () => {
  const pData = useLoaderData();
  let cart = [];
  const savedCart = getStoredCart();
  for (const id in savedCart) {
    const foundProduct = pData.find((p) => p.id === id);
    if (foundProduct) {
        foundProduct.quantity=savedCart[id];
      cart.push(foundProduct);
    }
  }
  return <div>cart</div>;
};

export default Cart;
