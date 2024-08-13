import { DollarSign, MapPin, Timer } from "lucide-react";
import successImg from "../../../assets/success.png";
import { CoffeeContext } from "../../../contexts/CoffeeContext";
import { useContextSelector } from "use-context-selector";
import { useEffect } from "react";

export function Success() {
  const address = useContextSelector(CoffeeContext, (context) => {
    return context.address;
  });
  const paymentMethod = useContextSelector(CoffeeContext, (context) => {
    return context.paymentMethod;
  });

  function paymentMethodValue() {
    switch (paymentMethod) {
      case "credit":
        return "Cartão de Crédito";
      case "debit":
        return "Cartão de Débito";
      default:
        return "Dinheiro";
    }
  }

  useEffect(() => {
    localStorage.removeItem("@coffee-delivery:payment-method-1.0.0")
    localStorage.removeItem("@coffee-delivery:cart-1.0.0")
  },[])

  return (
    <div className="pt-20 ">
      <h2 className="text-title-lg text-yellow-dark font-bold">
        Uhu! Pedido confirmado
      </h2>
      <span className="text-lg text-base-subtitle">
        Agora é só aguardar que logo o café chegará até você
      </span>
      <div className="flex justify-between items-center">
        <div className="mt-10  gap-8 flex flex-col p-10 border border-yellow-dark rounded-tr-3xl rounded-bl-3xl rounded-t-lg rounded-b-lg">
          <div className="flex gap-2">
            <div className="h-8 w-8 rounded-full bg-purple-base flex items-center justify-center">
              <MapPin size={16} className="text-base-background" />
            </div>
            <div>
              <p className="text-base-text text-md">
                Entrega em{" "}
                <strong>
                  {address?.address}, {address.addressNumber}{" "}
                  {address.complement}
                </strong>
              </p>
              <span>
                {address.neighborhood} - {address.city}, {address.uf}
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="h-8 w-8 rounded-full bg-yellow-base flex items-center justify-center">
              <Timer size={16} className="text-base-background" />
            </div>
            <div>
              <p className="text-base-text text-md">Previsão de entrega</p>
              <span className="font-bold text-base-text">20 min - 30 min</span>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="h-8 w-8 rounded-full bg-yellow-dark flex items-center justify-center">
              <DollarSign size={16} className="text-base-background" />
            </div>
            <div>
              <p className="text-base-text text-md">Pagamento na entrega</p>
              <span className="font-bold text-base-text">{paymentMethodValue()}</span>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <img src={successImg} />
        </div>
      </div>
    </div>
  );
}
