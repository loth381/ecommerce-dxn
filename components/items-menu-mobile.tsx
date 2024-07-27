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
      <h1 className="text-center py-2 font-bold">centro de servicio Huamanga</h1>
        <Link href="/allproducts" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
          Tienda
        </Link>
        <Link href="/category/jugos" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
          Jugos
        </Link>
        <Link href="/category/mascarillas" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
          Mascarillas
        </Link>
        <Link href="/afiliacion" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
          Afiliate
        </Link>
        <Link href="/nosotros" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
          Sobre nosotros
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default ItemsMenuMobile;
