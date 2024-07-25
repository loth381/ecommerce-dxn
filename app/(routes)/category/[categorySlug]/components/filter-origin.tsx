import { useGetProductField } from "@/api/getProductoField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";

type FiltersOriginProps = {
  setFilterOrigin: (origin: string) => void;
};

const FilterOrigin = (props: FiltersOriginProps) => {
  const { setFilterOrigin } = props;
  const { result, loading }: FilterTypes = useGetProductField();

  return (
    <div className="my-5">
      <p className="mb-3 text-lg font-semibold">Origen</p>
      {loading && result === null && <p className="text-gray-500">Cargando origen...</p>}
      
      <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
        {/* Opción para mostrar todos los productos */}
        <div className="flex items-center space-x-2 mb-2">
          <RadioGroupItem value="" id="all" />
          <Label htmlFor="all" className="cursor-pointer">
            Todos
          </Label>
        </div>

        {result !== null && result.schema.attributes.origin.enum.length > 0 ? (
          result.schema.attributes.origin.enum.map((origin: string) => (
            <div key={origin} className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value={origin} id={origin} />
              <Label htmlFor={origin} className="cursor-pointer">
                {origin}
              </Label>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No hay opciones disponibles</p>
        )}
      </RadioGroup>
    </div>
  );
};

export default FilterOrigin;
