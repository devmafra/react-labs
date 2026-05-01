import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  getAmountOfItemsInCart,
  useCartContext,
} from "../contexts/CartContext";

function UserButtons() {
  const { toggleIsCartOpen, cartItems } = useCartContext();
  const amountOfitems = getAmountOfItemsInCart(cartItems);

  return (
    <div>
      <button
        className="px-2 relative cursor-pointer"
        onClick={toggleIsCartOpen}
      >
        <FontAwesomeIcon icon={faCartShopping} />
        {!!amountOfitems && (
          <div
            id="cart-amount"
            className="absolute inline-flex items-center justify-center w-6 h-6 font-bold text-white bg-red-500 border-2 border-white rounded-full -top-3 -right-2 text-base"
          >
            {amountOfitems}
          </div>
        )}
      </button>

      <Link to="/history" className="px-2 cursor-pointer">
        <FontAwesomeIcon icon={faUser} />
      </Link>
    </div>
  );
}

export default UserButtons;
