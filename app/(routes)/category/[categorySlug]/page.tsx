"use client";

import { useGetCategoryProducts } from "@/api/getCategoryProduct";
import { useSearchProducts } from "@/api/useSearchProducts";
import CarouselTextBanner from "@/components/carousel-text-banner";
import SkeletonSchema from "@/components/skeletonSchema";
import { Separator } from "@/components/ui/separator";
import { ProductType } from "@/types/product";
import { ResponseType } from "@/types/response";
import { Search } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import FiltersControlsCategory from "./components/filters-controls-category";
import ProductCard from "./components/product-card";

export default function Page() {
  const params = useParams();
  const { categorySlug } = params;
  const { result, loading }: ResponseType = useGetCategoryProducts(categorySlug);
  const [filterOrigin, setFilterOrigin] = useState("");
  const [query, setQuery] = useState(""); // Estado para el término de búsqueda
  const { result: searchResult, loading: searchLoading } =
    useSearchProducts(query); // Hook de búsqueda mejorado

  const filteredProducts = result && Array.isArray(result)
    ? (filterOrigin === ""
      ? result
      : result.filter(
          (product: ProductType) => product.attributes.origin === filterOrigin
        ))
    : [];
  const displayedProducts = query ? searchResult : filteredProducts;

  return (
    <>
    <CarouselTextBanner/>
    <div className="max-w-6xl py-4 px-1 mx-auto sm:py-16 sm:px-24">
      {result && Array.isArray(result) && result.length > 0 && !loading && (
        <h1 className="text-5xl px-5 font-bold py-5">
          {result[0].attributes.category.data.attributes.categoryName}
        </h1>
      )}
      <div className="mt-4 sm:mt-0 sm:ml-4 flex items-center">
        <div className="relative w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)} // Actualizar el término de búsqueda
            placeholder="Buscar productos..."
            className="w-full px-3 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="text-gray-500 dark:text-gray-400" />
          </div>
        </div>
      </div>
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />

        <div className="grid gap-20 px-2 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {(loading || searchLoading) && <SkeletonSchema grid={3} />} {/* Mostrar carga si está cargando */}
          {displayedProducts &&
            displayedProducts.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} /> // Mostrar productos
            ))}
          {!(loading || searchLoading) &&
            displayedProducts &&
            displayedProducts.length === 0 && <p>No hay productos</p>} {/* Mensaje si no hay productos */}
        </div>
      </div>
    </div>
    </>
  );
}
