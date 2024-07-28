/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { useCart } from "@/hooks/use-cart";
import { ProductType } from "@/types/product";
import { ResponseType } from "@/types/response";
import { Expand, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import IconButton from "./icon-button";
import SkeletonSchema from "./skeletonSchema";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const FeacturedProducts = () => {
  const { loading, result }: ResponseType = useGetFeaturedProducts();
  const router = useRouter();
  const {addItem} = useCart()
  
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3} />}
          {result !== null &&
            result?.map((product: ProductType) => {
              const { attributes, id } = product;
              const { slug, images, productName, taste, origin } = attributes;
              return (
                <CarouselItem
                  key={id}
                  className="md:basis-1/2 lg:basis-1/3 group"
                >
                  <div className="p-1">
                    <Card className="py-4 border border-gray-200 shadow-none">
                      <CardContent  className="relative flex items-center justify-center px-5 py-4">
                      {images?.data?.[0]?.attributes?.url ? (
                        <Link
                        href={`/product/${product.attributes.slug}`}
                        >
                          <img
                            src={`${images.data[0].attributes.url}`}
                            alt={productName || "Imagen destacada del producto"}
                            className="fixed-size-image transition duration-300 ease-in-out "
                          />
                          </Link>
                        ) : (
                          <p>No image available</p>
                        )}
                        <div className="absolute w-full px-6  transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                          <div className="flex justify-center gap-x-6">
                            <IconButton
                              onClick={() => router.push(`product/${slug}`)}
                              icon={<Expand size={20} />}
                              className="text-gray-600"
                            />
                            <IconButton
                              onClick={() => addItem(product)}
                              icon={<ShoppingCart size={20} />}
                              className="text-gray-600"
                            />
                          </div>
                        </div>
                      </CardContent>
                      <div className="flex gap-4 px-6">
                        <h3 className="text-lg text-center font-bold">{productName}</h3>
                        {/* <div className="flex items-center justify-between gap-3">
                        {taste && (
                            <p className="px-2 text-sm py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                              {taste}
                            </p>
                          )}
                          {origin && (
                            <p className="px-2 py-1 text-sm text-white bg-yellow-900 rounded-full w-fit">
                              {origin}
                            </p>
                          )}
                        </div> */}
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext className="hidden sm:flex " />
      </Carousel>
    </div>
  );
};

export default FeacturedProducts;

