import { Input } from "../../../../components/input";
import { useFormContext } from "react-hook-form";

export function AddressForm() {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col gap-x-3 gap-y-4">
      <div className="grid grid-cols-3">
        <Input
          className="col-span-1"
          id="cep"
          placeholder="CEP"
          {...register("cep")}
        />
      </div>

      <div className="grid grid-cols-3">
        <Input
          className="col-span-3"
          id="address"
          placeholder="Rua"
          {...register("address")}
        />
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Input
          className="col-span-1"
          id="addressNumber"
          placeholder="Número"
          type="number"
          {...register("addressNumber", { valueAsNumber: true })}
        />

        <Input
          className="col-span-2"
          id="complement"
          placeholder="Complemento"
          {...register("complement")}
          required={false}
        />
      </div>

      <div className="grid grid-cols-12 gap-3">
        <Input
          className="col-span-4"
          id="neighborhood"
          placeholder="Bairro"
          {...register("neighborhood")}
        />

        <Input
          className="col-span-6"
          id="city"
          placeholder="Cidade"
          {...register("city")}
          required={false}
        />

        <Input
          className="col-span-2"
          id="uf"
          placeholder="UF"
          {...register("uf")}
          required={false}
        />
      </div>
    </div>
  );
}
