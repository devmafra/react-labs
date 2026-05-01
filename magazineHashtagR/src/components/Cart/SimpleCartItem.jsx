import { catalogIndexedById } from "../../utils/catalog";
import { convertToCurrency } from "../../utils/convertoToCurrency";

function SimpleCartItem({ id, amount }) {
  const { name, price, image } = catalogIndexedById[id];

  return (
    <article className="flex bg-stone-100 p-1 border border-slate-300 rounded-md relative">
      <img src={image} alt="" className="h-24" />

      <div className="flex flex-col justify-around mx-2">
        <p className="text-slate-950 text-sm">{name}</p>
        <p className="text-slate-400 text-xs">Tamanho: M</p>
        <p className="text-green-700 text-lg">{convertToCurrency(price)}</p>
        <div className="flex justify-center text-slate-950 absolute right-2 bottom-0 mb-2">
          <p className="p-2 w-8 mx-auto ">{amount}</p>
        </div>
      </div>
    </article>
  );
}

export default SimpleCartItem;
