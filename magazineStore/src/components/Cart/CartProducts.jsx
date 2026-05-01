import { useCartContext } from "../../contexts/CartContext";
import CartItem from "./CartItem";
import SimpleCartItem from "./SimpleCartItem";

function CartProducts({ isHomePage = true }) {
  const { cartItems } = useCartContext();

  const cartItemsArray = [];
  for (const itemId in cartItems) {
    cartItemsArray.push({ id: Number(itemId), amount: cartItems[itemId] });
  }
  return (
    <section
      className={`flex flex-col justify-start overflow-auto gap-2 ${isHomePage ? "h-3/5" : ""}`}
    >
      {cartItemsArray.map((product) =>
        isHomePage ? (
          <CartItem key={product.id} {...product} />
        ) : (
          <SimpleCartItem key={product.id} {...product} />
        ),
      )}
    </section>
  );
}

export default CartProducts;
