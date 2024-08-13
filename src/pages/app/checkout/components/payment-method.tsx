import { Banknote, CreditCard, Landmark } from "lucide-react";
import { cn } from "../../../../lib/utils";
import { PaymentMethodsTypes } from "../../../../types";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { useContextSelector } from "use-context-selector";

export function PaymentMethods() {
  const paymentMethod = useContextSelector(CoffeeContext, (context) => {
    return context.paymentMethod;
  });
  
  const selectPaymentMethod = useContextSelector(CoffeeContext, (context) => {
    return context.selectPaymentMethod;
  });
  
  function handleSelectPaymentMethod(paymentMethod: string) {
    selectPaymentMethod(paymentMethod)
  }

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3">
      <button
        type="button"
        className={cn(
          "p-4 bg-base-button flex justify-start items-center rounded-md w-full hover:bg-base-hover border border-transparent",
          paymentMethod === PaymentMethodsTypes.CREDIT &&
            "bg-purple-light hover:bg-purple-light border border-purple-base"
        )}
        onClick={() => handleSelectPaymentMethod(PaymentMethodsTypes.CREDIT)}
      >
        <CreditCard className="text-purple-base mr-[15px]" />
        <span
          className=" text-base-text text-button-md text-center
        hover:text-base-subtitle
        "
        >
          CARTÃO DE CRÉDITO
        </span>
      </button>
      <button
        type="button"
        className={cn(
          "p-4 bg-base-button flex justify-start items-center rounded-md w-full hover:bg-base-hover",
          paymentMethod === PaymentMethodsTypes.DEBIT &&
            "bg-purple-light hover:bg-purple-light border border-purple-base"
        )}
        onClick={() => handleSelectPaymentMethod(PaymentMethodsTypes.DEBIT)}
      >
        <Landmark className="text-purple-base mr-[15px]" />
        <span
          className=" text-base-text text-button-md text-center
        hover:text-base-subtitle
        "
        >
          CARTÃO DE DÉBITO
        </span>
      </button>
      <button
        type="button"
        className={cn(
          "p-4 bg-base-button flex justify-start items-center rounded-md w-full hover:bg-base-hover",
          paymentMethod === PaymentMethodsTypes.CASH &&
            "bg-purple-light hover:bg-purple-light border border-purple-base"
        )}
        onClick={() => handleSelectPaymentMethod(PaymentMethodsTypes.CASH)}
      >
        <Banknote className="text-purple-base mr-[15px]" />
        <span
          className=" text-base-text text-button-md text-center
        hover:text-base-subtitle
        "
        >
          DINHEIRO
        </span>
      </button>
    </div>
  );
}
