import { getStoredCart } from "../utils/fakeDB";

export const addProductsAndCartData = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();
  const savedCart = getStoredCart();
  let cartArray = [];
  for (const id in savedCart) {
    const foundProduct = products.find((p) => p.id === id);
    if (foundProduct) {
      foundProduct.quantity = savedCart[id];
      cartArray.push(foundProduct);
    }
  }
  return (cartArray,products);
};
