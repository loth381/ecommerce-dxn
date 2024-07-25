"use client";

import { useGetProductBySlug } from "@/api/getProductBySlug";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";
import CarouselProduct from "./components/carousel-product";
import InfoProduct from "./components/info-product";
import SkeletonProduct from "./components/skeleton-product";

export default function Page() {
  const params = useParams();
  const { productSlug } = params;
  const { result }: ResponseType = useGetProductBySlug(productSlug);

  // Cambiado: Mostrar un esqueleto de carga mientras se obtiene la información
  if (result === null) {
    return <SkeletonProduct />;
  }

  // Cambiado: Verificar que result no está vacío y tiene elementos
  if (result.length === 0) {
    return <p>No se encontró el producto.</p>;
  }

  // Cambiado: Verificar que result[0] y result[0].attributes están definidos
  const product = result[0];
  const images = product.attributes.images;

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          {/* Cambiado: Verificar si images está definido antes de pasarlo a CarouselProduct */}
          {images ? (
            <CarouselProduct images={images} />
          ) : (
            <p>No images available</p>
          )}
        </div>

        <div className="sm:px-12">
          {/* Cambiado: Asegurarse de que el producto tenga atributos antes de renderizar InfoProduct */}
          {product.attributes ? (
            <InfoProduct product={product} />
          ) : (
            <p>Product details not available</p>
          )}
        </div>
      </div>
    </div>
  );
}
