import { DollarSign, MapPin } from "lucide-react";
import { AddressForm } from "./components/address-form";
import * as zod from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { CoffeeContext } from "../../../contexts/CoffeeContext";
import { QuantityBtn } from "../../../components/quantity-btn";
import { PaymentMethods } from "./components/payment-method";
import { useContextSelector } from "use-context-selector";
import type { CoffeeType } from "../../../types";
import { RemoveBtn } from "./components/remove-btn";
import { useNavigate } from "react-router-dom";

const addressFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  address: zod.string().min(1, "Informe o Endereço"),
  addressNumber: zod.number().min(0, "Insira o Número").nullable(),
  complement: zod.string().min(1, "Informe o Endereço").optional(),
  neighborhood: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  uf: zod.string().min(1, "Informe a sigla do Estado"),
});

export type AddressFormData = zod.infer<typeof addressFormValidationSchema>;

export function Checkout() {
  const insertAddress = useContextSelector(CoffeeContext, (context) => {
    return context.insertAddress;
  });

  const address = useContextSelector(CoffeeContext, (context) => {
    return context.address;
  });

  const cart = useContextSelector(CoffeeContext, (context) => {
    return context.cart;
  });

  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      cep: address?.cep ?? "",
      address: address?.address ?? "",
      addressNumber: address?.addressNumber ?? null,
      complement: address?.complement ?? "",
      neighborhood: address?.neighborhood ?? "",
      city: address?.city ?? "",
      uf: address?.uf ?? "",
    },
  });
  const { handleSubmit, reset } = addressForm;

  const navigate = useNavigate();

  function handleAddressForm(data: AddressFormData) {
    insertAddress(data);

    navigate("/success");
  }

  const itemsTotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const totalPrice = itemsTotal + 350;

  useEffect(() => {
    reset(address);
  }, [address, reset]);

  return (
    <div className="mt-10 grid grid-cols-1-auto">
      <form onSubmit={handleSubmit(handleAddressForm)}>
        <div className="flex flex-col lg:grid lg:grid-cols-1-auto gap-8">
          <div>
            <h2 className="mb-[15px] text-title-xs text-base-subtitle">
              Complete seu pedido
            </h2>

            <div className="flex flex-col gap-3">
              <div className="bg-base-card p-10 rounded-md">
                <div className="flex mb-8 gap-x-2">
                  <MapPin className="text-yellow-dark" />
                  <div>
                    <p className="text-md text-base-subtitle">
                      Endereço de Entrega
                    </p>
                    <span className="text-sm text-base-text">
                      Informe o endereço onde deseja receber seu pedido
                    </span>
                  </div>
                </div>

                <FormProvider {...addressForm}>
                  <AddressForm />
                </FormProvider>
              </div>

              <div className="p-10 bg-base-card rounded-md">
                <div className="flex mb-8 gap-x-2">
                  <DollarSign className="text-purple-base" />
                  <div>
                    <p className="text-md text-base-subtitle">Pagamento</p>
                    <span className="text-sm text-base-text">
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </span>
                  </div>
                </div>

                <PaymentMethods />
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-[15px] text-title-xs text-base-subtitle">
              Cafés selecionados
            </h2>

            <div
              className="bg-base-card p-10 flex flex-col items-center gap-6 
              rounded-tr-3xl rounded-bl-3xl rounded-t-md rounded-b-md"
            >
              <div className="flex flex-col gap-6">
                {cart.map((coffee: CoffeeType) => (
                  <div className="flex flex-col">
                    <div className="flex gap-5">
                      <img src={coffee.src} width="64px" height="100px" />

                      <div>
                        <p className="mb-2 text-base-subtitle text-md">
                          {coffee.name}
                        </p>

                        <div className="flex gap-2">
                          <QuantityBtn coffee={coffee} />
                          <RemoveBtn id={coffee.id} />
                        </div>
                      </div>
                      <span className="text-md font-bold text-base-text">
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(coffee.price / 100)}
                      </span>
                    </div>
                    <div className="border-b-2 mt-6"></div>
                  </div>
                ))}
              </div>

              <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between">
                  <span className="text-sm text-base-text">Total de itens</span>
                  <span className="text-md text-base-text">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(itemsTotal / 100)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm text-base-text">Entrega</span>
                  <span className="text-md text-base-text">R$ 3,50</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-lg font-bold text-base-subtitle">
                    Total
                  </span>
                  <span className="text-lg font-bold text-base-subtitle">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(totalPrice / 100)}
                  </span>
                </div>
              </div>

              <button
                className="p-3 bg-yellow-base rounded-md w-full
              text-base-white text-button-lg"
                type="submit"
              >
                CONFIRMAR PEDIDO
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
