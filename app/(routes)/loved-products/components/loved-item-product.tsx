/* eslint-disable @next/next/no-img-element */
import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { UseLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface LovedItemProductProps {
  product: ProductType;
}

const LovedItemProduct = (props: LovedItemProductProps) => {
  const { product } = props;
  const router = useRouter();
  const { removeLovedItem } = UseLovedProducts();
  const { addItem } = useCart();

  const handleAddToCheckout = () => {
    addItem(product);
    removeLovedItem(product.id);
  };

  // Verificar que images.data existe y que tiene al menos un elemento
  const imageUrl = product.attributes.images?.data?.[0]?.attributes?.url;
  const hasImage = Boolean(imageUrl);

  return (
    <li className="flex py-6 border-b">
      <div onClick={() => router.push(`/product/${product.attributes.slug}`)}>
        {hasImage ? (
          <img
            src={`${imageUrl}`}
            alt={product.attributes.productName}
            className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
          />
        ) : (
          <div className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32 bg-gray-200 flex items-center justify-center">
            No Image
          </div>
        )}
      </div>
      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">{product.attributes.productName}</h2>
          <p className="font-bold">{formatPrice(product.attributes.price)}</p>
          <ProductTasteOrigin 
            origin={product.attributes.origin} 
            taste={product.attributes.taste} 
          />
          <Button className="mt-5 rounded-full" onClick={handleAddToCheckout}>
            Añadir al carro
          </Button>
        </div>
        <div>
          <button
            className={cn(
              "rounded-full flex items-center justify-center dark:bg-slate-900 dark:text-white bg-white border shadow-md p-1 hover:scale-110 transition"
            )}
            onClick={() => removeLovedItem(product.id)}
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default LovedItemProduct;
