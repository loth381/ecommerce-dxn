"use client";
import { useCart } from "@/hooks/use-cart";
import { UseLovedProducts } from "@/hooks/use-loved-products";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ItemsMenuMobile from "./items-menu-mobile";
import MenuList from "./menu-list";
import ToggleTheme from "./toggle-theme";

const Navbar = () => {
  const router = useRouter();
  const { items: cartItems } = useCart();
  const { lovedItems } = UseLovedProducts();

  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
      <h1
        className="flex items-center text-xl md:text-3xl cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image
          src={"/dxnlogo.png"}
          width={60}
          height={60}
          alt="Logo DXN"
          className="mr-2 md:mr-4"
        />
        <span className="hidden md:flex flex-col items-center text-center ">
          <span className="text-sm md:text-xl">Centro de servicio</span>
          <span className="font-bold text-sm md:text-2xl">Huamanga</span>
        </span>
      </h1>
      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className="flex sm:hidden">
        <ItemsMenuMobile />
      </div>
      <div className="flex items-center gap-8 sm:gap-6">
        <button
          onClick={() => router.push("/cart")}
          aria-label={`Ir al carrito${
            cartItems.length ? ` con ${cartItems.length} artículo(s)` : ""
          }`}
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
          className={`cursor-pointer ${
            lovedItems.length > 0 && "fill-black dark:fill-white"
          }`}
          onClick={() => router.push("/loved-products")}
        />

        <ToggleTheme />
      </div>
    </div>
  );
};

export default Navbar;
