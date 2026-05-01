import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartContext } from "../../contexts/CartContext";
import { catalogIndexedById } from "../../utils/catalog";
import { convertToCurrency } from "../../utils/convertoToCurrency";

function CartItem({ id, amount }) {
  const { addToCart, subtractFromCart, removeFromCart } = useCartContext();

  const { name, price, image } = catalogIndexedById[id];

  return (
    <article className="flex bg-stone-100 p-1 border border-slate-300 rounded-md relative">
      <img src={image} alt="" className="h-24" />
      <button
        className="text-right text-l  absolute top-0 right-2 text-slate-950 cursor-pointer"
        onClick={() => removeFromCart(id)}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className="flex flex-col justify-around mx-2">
        <p className="text-slate-950 text-sm">{name}</p>
        <p className="text-slate-400 text-xs">Tamanho: M</p>
        <p className="text-green-700 text-lg">{convertToCurrency(price)}</p>
        <div className="flex justify-center text-slate-950 absolute right-2 bottom-0 mb-2">
          <button
            className="border border-slate-400 hover:border-slate-900 mb-2 cursor-pointer"
            onClick={() => subtractFromCart(id)}
          >
            <FontAwesomeIcon className="p-1" icon={faMinus} />
          </button>
          <p className="p-2 w-8 mx-auto ">{amount}</p>
          <button
            className="border border-slate-400 hover:border-slate-900 mb-2 cursor-pointer"
            onClick={() => addToCart(id)}
          >
            <FontAwesomeIcon className="p-1" icon={faPlus} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default CartItem;
