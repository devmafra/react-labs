import { z } from "zod";

export const applyMask = (id, rawValue) => {
  const digits = rawValue.replace(/\D/g, "");

  switch (id) {
    case "credit-card":
      return digits.replace(/(\d{4})(?=\d)/g, "$1 ").substring(0, 19);

    case "phone":
      return digits
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .substring(0, 15);

    case "postal-code":
      return digits.replace(/(\d{5})(\d)/, "$1-$2").substring(0, 9);

    case "expiration-date":
      return digits.replace(/(\d{2})(\d)/, "$1/$2").substring(0, 5);

    case "cvv":
      return digits.substring(0, 3);

    default:
      return rawValue;
  }
};

const phoneRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;
const creditCardRegex = /^\d{4} \d{4} \d{4} \d{4}$/;
const postalCodeRegex = /^\d{5}-\d{3}$/;
const expirationDateRegex = /^(0[1-2]|1[0-2])\/\d{2}$/;

export const schema = z.object({
  name: z.string().min(3, "Nome deve ter mais que 3 letras"),
  surname: z.string().min(3, "Sobrenome deve ter mais que 3 letras"),
  email: z.string().email("Email inválido"),
  phone: z
    .string()
    .regex(phoneRegex, "Formato: (99) 99999-9999")
    .transform((val) => val.replace(/\D/g, "")),
  cardNumber: z
    .string()
    .min(1, "O número do cartão é obrigatório")
    .regex(creditCardRegex, "Formato: 0000 0000 0000 0000")
    .transform((val) => val.replace(/\s/g, "")),
  postalCode: z
    .string()
    .regex(postalCodeRegex, "Formato: 00000-000")
    .transform((val) => val.replace(/\D/g, "")),
  expirationDate: z.string().regex(expirationDateRegex, "Formato: MM/AA"),
  cvv: z
    .string()
    .length(3, "O CVV deve ter 3 dígitos")
    .regex(/^\d+$/, "Apenas números"),
  address: z.string().min(4, "Endereço inválido"),
  addressNumber: z.string().min(1, "Número inválido"),
});
