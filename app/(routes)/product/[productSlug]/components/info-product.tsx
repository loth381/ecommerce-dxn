"use client"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { UseLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export type InfoProductProps = {
  product: ProductType;
};

const InfoProduct = (props: InfoProductProps) => {
  const router = useRouter();
  const { product } = props;
  const { addItem } = useCart();
  const { addLoveItem, removeLovedItem, lovedItems } = UseLovedProducts();
  const [isLoved, setIsLoved] = useState<boolean>(false);

  useEffect(() => {
    // Verificar si el producto ya está en la lista de favoritos al montar el componente
    const loved = lovedItems.some((item) => item.id === product.id);
    setIsLoved(loved);
  }, [lovedItems, product.id]);

  const handleLoveClick = () => {
    if (isLoved) {
      removeLovedItem(product.id);
    } else {
      addLoveItem(product);
    }
    setIsLoved(!isLoved);
  };

  const handleClick = () => {
    // Aquí podrías agregar el producto al carrito si es necesario
    addItem(product);
    // Redirige a la página de todos los productos
    router.push("/cart");
  };
  return (
    <div className="px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-between mb-3">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          {product.attributes.productName}
        </h1>
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
            {product.attributes.taste}
          </p>
          <p className="px-2 py-1 text-xs bg-yellow-900 rounded-full w-fit text-white">
            {product.attributes.origin}
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <p>{product.attributes.description}</p>
      <Separator className="my-4" />
      <p className="my-4 text-2xl">{formatPrice(product.attributes.price)}</p>
      <div className="flex items-center gap-5">
        <Button  className="w-full" onClick={handleClick}>
          Comprar
        </Button>
        <Heart
          width={30}
          strokeWidth={1}
          className={`transition duration-300 cursor-pointer ${
            isLoved ? "fill-black dark:fill-white" : ""
          }`}
          onClick={handleLoveClick}
          aria-label={isLoved ? "Quitar de favoritos" : "Añadir a favoritos"}
        />
      </div>
    </div>
  );
};

export default InfoProduct;
