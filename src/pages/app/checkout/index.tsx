import {
  Banknote,
  CreditCard,
  DollarSign,
  Landmark,
  MapPin,
} from "lucide-react";
import { AddressForm } from "../../components/address-form";
import * as zod from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { CoffeeContext } from "../../../contexts/CoffeeContext";
import test from "../../../assets/coffees/expresso-tradicional.png";
import { QuantityBtn } from "../../components/quantity-btn";

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
  const { insertAddress } = useContext(CoffeeContext);

  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      cep: "",
      address: "",
      addressNumber: null,
      complement: "",
      neighborhood: "",
      city: "",
      uf: "",
    },
  });
  const { handleSubmit, reset, formState } = addressForm;

  const { errors } = formState;
  console.log("🚀 ~ Checkout ~ errors:", errors);

  function handleAddressForm(data: AddressFormData) {
    console.log("🚀 ~ handleAddressForm ~ data:", data);
    insertAddress(data);
    reset();
  }

  return (
    <div className="mt-10 grid grid-cols-1-auto">
      <form onSubmit={handleSubmit(handleAddressForm)}>
        <div className="grid grid-cols-1-auto gap-8">
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

                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    className="p-4 bg-base-button flex justify-start items-center rounded-md w-full"
                  >
                    <CreditCard className="text-purple-base mr-[15px]" />
                    <span className="whitespace-nowrap bg-base-button text-base-text text-button-md text-center">
                      CARTÃO DE CRÉDITO
                    </span>
                  </button>
                  <button
                    type="button"
                    className="p-4 bg-base-button flex justify-start items-center rounded-md w-full"
                  >
                    <Landmark className="text-purple-base mr-[15px]" />
                    <span className="whitespace-nowrap bg-base-button text-base-text text-button-md text-center">
                      CARTÃO DE DÉBITO
                    </span>
                  </button>
                  <button
                    type="button"
                    className="p-4 bg-base-button flex justify-start items-center rounded-md w-full"
                  >
                    <Banknote className="text-purple-base mr-[15px]" />
                    <span className="whitespace-nowrap bg-base-button text-base-text text-button-md text-center">
                      DINHEIRO
                    </span>
                  </button>
                </div>
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
                <div className="flex flex-col">
                  <div className="flex gap-5">
                    <img src={test} width="64px" height="100px" />

                    <div>
                      <p className="mb-2 text-base-subtitle text-md">
                      Expresso Tradicional
                      </p>

                      <div className="flex gap-2">
                        <QuantityBtn />
                        <QuantityBtn />
                      </div>
                    </div>
                    <span className="text-md font-bold text-base-text">
                      R$ 9,90
                    </span>
                  </div>
                  <div className="border-b-2 mt-6"></div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-5">
                    <img src={test} width="64px" />

                    <div>
                      <p className="mb-2 text-base-subtitle text-md">
                        Latte
                      </p>

                      <div className="flex gap-2">
                        <QuantityBtn />
                        <QuantityBtn />
                      </div>
                    </div>
                    <span className="text-md font-bold text-base-text">
                      R$ 9,90
                    </span>
                  </div>
                  <div className="border-b-2 mt-6"></div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between">
                  <span className="text-sm text-base-text">Total de itens</span>
                  <span className="text-md text-base-text">R$ 29,70</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm text-base-text">Entrega</span>
                  <span className="text-md text-base-text">R$ 3,50</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-lg font-bold text-base-subtitle">Total</span>
                  <span className="text-lg font-bold text-base-subtitle">R$ 33,20</span>
                </div>
              </div>

              <button
                className="p-3 bg-yellow-base rounded-md w-full
              text-base-white text-button-lg
              "
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
