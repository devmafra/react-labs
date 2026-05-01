import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import CartProducts from "./CartProducts";
import TotalPriceCell from "./TotalPriceCell";

function CartOverlay() {
  const { isCartOpen, toggleIsCartOpen, cartItems } = useCartContext();

  return (
    <div
      className={`fixed flex inset-0 z-50 h-screen w-screen  ${isCartOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
    >
      <div className="absolute inset-0 bg-slate-950/50"></div>
      <section
        id="outside-of-cart"
        className="w-3/4 z-10"
        onClick={toggleIsCartOpen}
      ></section>
      <section
        id="cart"
        className={`w-1/4 bg-slate-950 min-w-96 border-l-4 border-slate-400 p-5 flex flex-col justify-between text-white transition-transform duration-500 ease-in-out ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between border-b border-slate-50 px-4 py-2">
          <p>Meu carrinho</p>
          <button className="cursor-pointer" onClick={toggleIsCartOpen}>
            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
          </button>
        </div>
        <CartProducts />
        {Object.keys(cartItems).length > 0 && (
          <>
            <TotalPriceCell />
            <Link
              className="bg-slate-100 text-slate-950 rounded-sm p-1 hover:bg-slate-300 text-center"
              to="/checkout"
            >
              Finalizar Compra
            </Link>
          </>
        )}
      </section>
    </div>
  );
}

export default CartOverlay;
