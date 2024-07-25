"use client";
import { useCart } from "@/hooks/use-cart";
import { UseLovedProducts } from "@/hooks/use-loved-products";
import { Heart, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import ItemsMenuMobile from "./items-menu-mobile";
import MenuList from "./menu-list";
import ToggleTheme from "./toggle-theme";

const Navbar = () => {
  const router = useRouter();
  const { items: cartItems } = useCart();
  const {lovedItems} =  UseLovedProducts();
  return (
    <div className="flex items-center  justify-between  p-4  mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
      <h1 className="text-3xl" onClick={() => router.push("/")}>
        Cafeteria <span className="font-bold">Avendaño</span>
      </h1>
      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className="flex sm:hidden">
        <ItemsMenuMobile />
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <button
          onClick={() => router.push("/cart")}
          aria-label={`Ir al carrito${cartItems.length ? ` con ${cartItems.length} artículo(s)` : ''}`}
          className="relative flex items-center"
        >
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-slate-900 dark:bg-white dark:text-slate-950 text-white text-xs rounded-full px-2 py-1">
              {cartItems.length}
            </span>
          )}
          <ShoppingCart strokeWidth="1" className="cursor-pointer" />
        </button>

        <Heart
          strokeWidth="1"
          className={`cursor-pointer ${lovedItems.length > 0 && "fill-black dark:fill-white"}`}
          onClick={() => router.push("/loved-products")}
        />
        
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Navbar;
