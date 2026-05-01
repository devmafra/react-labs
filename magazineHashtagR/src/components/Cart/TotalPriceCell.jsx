import {
  calculateTotalPrice,
  useCartContext,
} from "../../contexts/CartContext";
import { convertToCurrency } from "../../utils/convertoToCurrency";

function TotalPriceCell() {
  const { cartItems } = useCartContext();
  const totalPrice = calculateTotalPrice(cartItems);

  return (
    <section className="flex bg-slate-100 p-1 text-green-700 rounded-md justify-evenly">
      <p>Total:</p>
      <p>{convertToCurrency(totalPrice)}</p>
    </section>
  );
}

export default TotalPriceCell;
