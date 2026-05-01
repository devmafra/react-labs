import { createContext, useState, useContext } from "react";
import { catalogIndexedById } from "../utils/catalog";

export const CartContext = createContext(null);

export const useCartContext = () => useContext(CartContext);

export const getAmountOfItemsInCart = (items) => {
  let amount = 0;
  for (const producId in items) {
    amount += items[producId];
  }
  return amount;
};

export function calculateTotalPrice(cartObject) {
  let price = 0;
  for (const cartItemId in cartObject) {
    price += catalogIndexedById[cartItemId].price * cartObject[cartItemId];
  }
  return price;
}

const CartContextProvider = ({ children }) => {
  const [isCartOpen, SetIsCartOpen] = useState(false);
  const [cartItems, SetCartItems] = useState({});

  const addToCart = (producId) => {
    const updatedCart = {
      ...cartItems,
      [producId]: (cartItems[producId] ?? 0) + 1,
    };
    SetCartItems(updatedCart);
  };

  const subtractFromCart = (producId) => {
    if (cartItems[producId] > 1) {
      const updatedCart = {
        ...cartItems,
        [producId]: cartItems[producId] - 1,
      };
      SetCartItems(updatedCart);
    } else {
      removeFromCart(producId);
    }
  };

  const removeFromCart = (producId) => {
    const updatedCart = { ...cartItems };
    delete updatedCart[producId];
    SetCartItems(updatedCart);
  };

  const toggleIsCartOpen = () => SetIsCartOpen(!isCartOpen);

  const wipeCart = () => {
    SetCartItems({});
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        toggleIsCartOpen,
        cartItems,
        SetCartItems,
        addToCart,
        subtractFromCart,
        removeFromCart,
        wipeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
