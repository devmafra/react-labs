import { zodResolver } from "@hookform/resolvers/zod";
import CryptoJS from "crypto-js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CartProducts from "../../components/Cart/CartProducts";
import TotalPriceCell from "../../components/Cart/TotalPriceCell";
import {
  calculateTotalPrice,
  useCartContext,
} from "../../contexts/CartContext";
import FormInput from "../../utils/FormInput";
import { schema } from "../../utils/formValidation";

function Checkout() {
  const navigate = useNavigate();
  const SECRET_KEY = "your-secret-key";

  const handleEncrypt = (input) => {
    return CryptoJS.AES.encrypt(input, SECRET_KEY).toString();
  };

  const { cartItems, wipeCart } = useCartContext();
  const totalPrice = calculateTotalPrice(cartItems);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <main className="bg-stone-200 h-[calc(100dvh-4.5rem)]">
      <p className="text-center text-2xl font-bold text-slate-950 pt-8">
        Finalizar Compra
      </p>

      <form
        onSubmit={handleSubmit((data) => {
          if (!cartItems) {
            return;
          }
          const secureData = {
            ...data,
            cardNumber: handleEncrypt(data.cardNumber),
            cvv: handleEncrypt(data.cvv),
            cartItems: cartItems,
            totalPrice: totalPrice,
          };

          console.log("Payload para o Servidor:", secureData);

          const purchaseHistory =
            JSON.parse(localStorage.getItem("purchaseHistory")) || [];

          purchaseHistory.push(secureData);

          localStorage.setItem(
            "purchaseHistory",
            JSON.stringify(purchaseHistory),
          );
          reset();
          wipeCart();
          navigate("/history");
          return;
        })}
        className="grid grid-rows-[max-content_1fr_1fr_1fr_1fr_1fr] grid-cols-3 grid-flow-col gap-4 h-3/4 mt-5 px-8"
      >
        <p className="text-center text-sm font-bold text-slate-950">
          Seus dados
        </p>
        <FormInput
          fieldType="text"
          fieldName="Nome"
          id="name"
          placeholder="John"
          required={true}
          register={{ ...register("name") }}
          errors={errors.name}
        />
        <FormInput
          fieldType="text"
          fieldName="Sobrenome"
          id="surname"
          placeholder="Wolthers"
          required={true}
          register={{ ...register("surname") }}
          errors={errors.surname}
        />
        <FormInput
          fieldType="email"
          fieldName="Email"
          id="email"
          placeholder="dev@davimafra.com"
          required={true}
          register={{ ...register("email") }}
          errors={errors.email}
        />
        <FormInput
          fieldType="text"
          fieldName="Telefone"
          id="phone"
          placeholder="(XX) 99999-9999"
          required={true}
          register={{ ...register("phone") }}
          errors={errors.phone}
        />
        <p className="text-center text-sm font-bold text-slate-950 row-start-1">
          Pagamento e Entrega
        </p>
        <FormInput
          fieldType="text"
          fieldName="Número do Cartão"
          id="credit-card"
          placeholder="9999 9999 8888 7777"
          required={true}
          register={{ ...register("cardNumber") }}
          errors={errors.cardNumber}
        />
        <div className="flex justify-center gap-3">
          <FormInput
            fieldType="text"
            fieldName="CVV"
            id="cvv"
            placeholder="123"
            className="w-1/2"
            required={true}
            register={{ ...register("cvv") }}
            errors={errors.cvv}
          />
          <FormInput
            fieldType="text"
            fieldName="Data Vencimento"
            id="expiration-date"
            placeholder="01/30"
            className="w-1/2"
            required={true}
            register={{ ...register("expirationDate") }}
            errors={errors.expirationDate}
          />
        </div>
        <FormInput
          fieldType="text"
          fieldName="CEP"
          id="postal-code"
          placeholder="11250-999"
          required={true}
          register={{ ...register("postalCode") }}
          errors={errors.postalCode}
        />
        <FormInput
          fieldType="text"
          fieldName="Endereço"
          id="address"
          placeholder="Rua Nove"
          required={true}
          register={{ ...register("address") }}
          errors={errors.address}
        />
        <div className="flex justify-center items-end gap-3">
          <FormInput
            fieldType="text"
            fieldName="Número"
            id="address-number"
            placeholder="12"
            className="w-1/2"
            required={true}
            register={{ ...register("addressNumber") }}
            errors={errors.addressNumber}
          />
          <FormInput
            fieldType="text"
            fieldName="Complemento"
            id="address-complement"
            placeholder="103"
            className="w-1/2"
          />
        </div>
        <p className="text-center text-sm font-bold text-slate-950 row-start-1">
          Seus Produtos
        </p>
        <section className="row-span-4 p-2 bg-neutral-100 rounded-md overflow-auto">
          <CartProducts isHomePage={false} />
        </section>
        <section className="row-span-1 flex flex-col gap-2">
          <TotalPriceCell />
          <button
            disabled={Object.keys(cartItems).length === 0}
            className="bg-slate-950 text-slate-100 rounded-md p-1 hover:bg-slate-800 text-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {Object.keys(cartItems).length === 0
              ? "Erro: carrinho vazio"
              : "Finalizar Compra"}
          </button>
        </section>
      </form>
    </main>
  );
}

export default Checkout;
