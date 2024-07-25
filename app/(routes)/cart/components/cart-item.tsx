/* eslint-disable @next/next/no-img-element */
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface CartItemProps {
  product: ProductType;
}

const CartItem = (props: CartItemProps) => {
  const { product } = props;
  const router = useRouter();
  const { removeItem } = useCart();
  return (
    <li className="flex py-6 border-b">
      {/* Imagen del producto */}
      <div
        onClick={() => router.push(`/product/${product.attributes.slug}`)}
        className="cursor-pointer"
      >
        {product.attributes.images?.data?.[0]?.attributes?.url ? (
          <img
            src={`${product.attributes.images.data[0].attributes.url}`}
            alt={product.attributes.productName}
            className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32 object-cover"
          />
        ) : (
          <p>No image available</p>
        )}
      </div>
      <div className="flex justify-between flex-1 px-6">
        {/* Detalles del producto */}
        <div>
          <h2 className="text-lg font-bold">
            {product.attributes.productName}
          </h2>
          <p className="font-bold">{formatPrice(product.attributes.price)}</p>
          <div className="flex items-center justify-between gap-3">
            <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
              {product.attributes.taste}
            </p>
            <p className="px-2 py-1 text-white bg-yellow-900 rounded-full w-fit">
              {product.attributes.origin}
            </p>
          </div>
          </div>

          {/* Botón para eliminar el producto del carrito */}
          <div>
          <button
            className={cn(
              "rounded-full flex items-center justify-center  dark:bg-slate-900 dark:text-whitebg-white border shadow-md p-1 hover:bg-red-200 hover:scale-110 transition" // Cambié el efecto de hover para resaltar el botón de eliminar
            )}
            onClick={() => removeItem(product.id)}
            aria-label={`Remove ${product.attributes.productName} from cart`} // Añadido aria-label para accesibilidad
          >
            <X size={20} />
          </button>
          </div>
      </div>
    </li>
  );
};

export default CartItem;
