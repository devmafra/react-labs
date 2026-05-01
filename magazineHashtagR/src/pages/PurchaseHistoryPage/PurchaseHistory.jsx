import PruchaseItem from "./PurchaseItem";

function PurchaseHistory() {
  const purchaseHistory = JSON.parse(localStorage.getItem("purchaseHistory"));
  console.log(purchaseHistory);

  return (
    <main className="bg-stone-200 h-[calc(100dvh-4.5rem)] overflow-auto pb-4">
      <p className="text-center text-2xl font-bold text-slate-950 pt-8">
        Histórico de Compras
      </p>
      {purchaseHistory &&
        purchaseHistory.map((item, index) => {
          return (
            <article className="row-span-4 p-2 bg-neutral-100 rounded-md overflow-auto mt-4 mx-10">
              <PruchaseItem id={index} {...item} />
            </article>
          );
        })}
      {!purchaseHistory && (
        <article className="row-span-4 p-2 bg-neutral-100 rounded-md overflow-auto mt-4 mx-10">
          <p className="text-center">Sem histórico de pedidos.</p>
        </article>
      )}
    </main>
  );
}

export default PurchaseHistory;
