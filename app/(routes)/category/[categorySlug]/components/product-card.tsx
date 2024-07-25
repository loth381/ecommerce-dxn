/* eslint-disable @next/next/no-img-element */

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  const router = useRouter();

  // Verificar que images.data existe y es un array
  const images = product.attributes.images?.data || [];
  
  return (
    <Link
      href={`/product/${product.attributes.slug}`}
      className="relative block p-2 transition-all duration-300 rounded-lg hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <div className="absolute flex items-center justify-between gap-2 p-1 z-10 top-2 left-2 sm:top-4 sm:left-4">
        <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
          {product.attributes.taste}
        </p>
        <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit">
          {product.attributes.origin}
        </p>
      </div>
      <Carousel
        opts={{ align: "start" }}
        className="w-full max-w-[1200px] sm:max-w-2xl lg:max-w-4xl overflow-hidden rounded-lg mx-auto"
      >
        <CarouselContent>
          {images.length > 0 ? (
            images.map((image) => (
              <CarouselItem key={image.id} className="relative group">
                <img
                  src={`${image.attributes.url}`}
                  alt={product.attributes.productName}
                  className="w-full h-60 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-xls">
                  <div className="flex justify-center gap-x-6">
        
                  </div>
                </div>
              </CarouselItem>
            ))
          ) : (
            <div className="w-full h-32 flex items-center justify-center bg-gray-200 rounded-xl">
              No Images Available
            </div>
          )}
        </CarouselContent>
      </Carousel>
      <p className="text-xl text-center mt-2 font-semibold">{product.attributes.productName}</p>
      <p className="text-center text-lg font-bold">
        {formatPrice(product.attributes.price)}
      </p>
    </Link>
  );
};

export default ProductCard;
