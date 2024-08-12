import { Minus, Plus } from "lucide-react";

export function QuantityBtn() {
  return (
    <div className="h-[38px] w-[72px] bg-base-button rounded-md flex items-center justify-evenly">
      <button className="text-purple-base">
        <Minus size={18} />
      </button>
      <span className="text-base-title">1</span>
      <button className="text-purple-base">
        <Plus size={18} />
      </button>
    </div>
  );
}
