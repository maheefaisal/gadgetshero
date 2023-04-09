import React, { useEffect } from "react";
import { getStoredCart } from "../utils/fakeDB";
import { useLoaderData } from "react-router-dom";

const Cart = () => {
  const {cartArray} = useLoaderData();
  return <div>cart</div>;
};

export default Cart;
