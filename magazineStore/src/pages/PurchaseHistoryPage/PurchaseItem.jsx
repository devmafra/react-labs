import { catalogIndexedById } from "../../utils/catalog";
import { convertToCurrency } from "../../utils/convertoToCurrency";

function PruchaseItem({
  id,
  name,
  surname,
  address,
  email,
  phone,
  postalCode,
  cartItems,
  totalPrice,
}) {
  const getProductsList = (cartItems) => {
    const cartItemsArray = [];

    for (const itemId in cartItems) {
      const { name, price } = catalogIndexedById[itemId];

      cartItemsArray.push({
        id: Number(itemId),
        amount: cartItems[itemId],
        name: name,
        price: price,
      });
    }
    return cartItemsArray;
  };

  const productsList = getProductsList(cartItems);
  console.log(productsList);

  return (
    <article className="flex px-4 py-2">
      <section className="grid grid-cols-2 grid-rows-3 grid-flow-col w-1/2">
        <p>
          <strong>Pedido N.º:</strong> {id}
        </p>
        <p>
          <strong>Nome:</strong> {name} {surname}
        </p>
        <p>
          <strong>Telefone:</strong> {phone}
        </p>
        <p>
          <strong>Email:</strong>
          {email}
        </p>
        <p>
          <strong>Endereço:</strong> {address}
        </p>
        <p>
          <strong>CEP:</strong> {postalCode}
        </p>
      </section>
      <section className="flex flex-col w-1/2">
        <p>
          <strong>Pedido:</strong>
        </p>
        <article>
          {productsList.map((item, index) => (
            <div
              className={`flex flex-row justify-between ${index % 2 === 0 ? "" : "bg-slate-200"}`}
            >
              <div className="flex flex-row gap-2 items-center">
                <p className="text-xs text-slate-500">Qtde.:</p>
                <p className="text-sm">{item.amount}</p>
                <p className="text-xs text-slate-500">Descr.:</p>
                <p className="text-sm">{item.name}</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-xs text-slate-500">Subtotal.:</p>
                <p className="text-sm">
                  {convertToCurrency(item.price * item.amount)}
                </p>
              </div>
            </div>
          ))}
          <div className="flex flex-row gap-2 items-center justify-end">
            <p className="text-md text-slate-500">Valor Total:</p>
            <p className="text-sm">{convertToCurrency(totalPrice)}</p>
          </div>
        </article>
      </section>
    </article>
  );
}

export default PruchaseItem;
