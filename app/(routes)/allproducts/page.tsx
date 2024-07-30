"use client";

import { useGetAllProducts } from "@/api/useGetAllProducts";
import SkeletonSchema from "@/components/skeletonSchema";
import { Separator } from "@/components/ui/separator";
import { ProductType } from "@/types/product";

import { useSearchProducts } from "@/api/useSearchProducts";
import CarouselTextBanner from "@/components/carousel-text-banner";
import { Search } from "lucide-react";
import Head from "next/head";
import { useEffect, useState } from "react";
import FiltersControlsCategory from "../category/[categorySlug]/components/filters-controls-category";
import ProductCard from "../category/[categorySlug]/components/product-card";

export default function AllProductsPage() {
  const { result, loading } = useGetAllProducts();
  const [filterOrigin, setFilterOrigin] = useState("");
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query); // Estado para el término de búsqueda
  const { result: searchResult, loading: searchLoading } =
    useSearchProducts(query); // Hook de búsqueda mejorado

    

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedQuery(query);
      }, 300);
  
      return () => {
        clearTimeout(handler);
      };
    }, [query]);

  const filteredProducts =
    !loading && result
      ? filterOrigin === ""
        ? result
        : result.filter(
            (product: ProductType) => product.attributes.origin === filterOrigin
          )
      : [];
      
  const displayedProducts = query ? searchResult : filteredProducts;
  return (
    <>
    <Head>
        <title>Todos los Productos - DXN</title>
        <meta name="description" content="Explora todos los productos disponibles de DXN. Encuentra productos de calidad y beneficios exclusivos." />
        <meta name="keywords" content="productos, DXN, salud, bienestar, no-code" />
        <meta name="robots" content="index, follow" />
      </Head>
    <CarouselTextBanner/>
    <div className="max-w-6xl py-4 px-1 mx-auto sm:py-16 sm:px-24">
      <h1 className="lg:text-5xl py-5 text-2xl lg:text-left text-center font-medium">
        Todos los Productos
      </h1>
      <div className="mt-4 sm:mt-0 sm:ml-4 flex items-center">
      <label htmlFor="search" className="sr-only">Buscar productos</label>
        <div className="relative w-full">
          <input
            id="search" 
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

        <div className="grid px-2 gap-20 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {(loading || searchLoading) && <SkeletonSchema grid={3} />}{" "}
          {/* Mostrar carga si está cargando */}
          {displayedProducts &&
            displayedProducts.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} /> // Mostrar productos
            ))}
          {!(loading || searchLoading) &&
            displayedProducts &&
            displayedProducts.length === 0 && <p>No hay productos</p>}{" "}
          {/* Mensaje si no hay productos */}
        </div>
      </div>
    </div>
    </>
  );
}
