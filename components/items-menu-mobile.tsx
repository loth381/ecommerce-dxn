import { Menu } from "lucide-react";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger
        aria-label="Open menu"  // Agregado para accesibilidad
        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"  // Estilos adicionales
      >
        <Menu size={24} />
      </PopoverTrigger>
      <PopoverContent className="w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md p-4">
        <Link href="/categories/cafe-molido" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
          Cafe molido
        </Link>
        <Link href="/categories/cafe-grano" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
          Cafe en granos
        </Link>
        <Link href="/categories/cafe-capsula" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
          Cafe en capsulas
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default ItemsMenuMobile;
