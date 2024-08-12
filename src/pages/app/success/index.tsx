import { DollarSign, MapPin, Timer } from "lucide-react";
import successImg from "../../../assets/success.png";

export function Success() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <span>Farrapos - Porto Alegre, RS</span>
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
              <p className="text-base-text text-md">
              Pagamento na entrega
              </p>
              <span className="font-bold text-base-text">Cartão de Crédito</span>
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
