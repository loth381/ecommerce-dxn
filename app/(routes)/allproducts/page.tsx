"use client";

import { useGetAllProducts } from "@/api/useGetAllProducts";
import SkeletonSchema from "@/components/skeletonSchema";
import { Separator } from "@/components/ui/separator";
import { ProductType } from "@/types/product";

import { useState } from "react";
import FiltersControlsCategory from "../category/[categorySlug]/components/filters-controls-category";
import ProductCard from "../category/[categorySlug]/components/product-card";

export default function AllProductsPage() {
    const { result, loading } = useGetAllProducts();
    const [filterOrigin, setFilterOrigin] = useState("");
  
    const filteredProducts = !loading && result
      ? (filterOrigin === ""
          ? result
          : result.filter(
              (product: ProductType) => product.attributes.origin === filterOrigin
            ))
      : [];
  
    return (
      <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
        <h1 className="text-2xl font-medium">Todos los Productos</h1>
        <Separator />
  
        <div className="sm:flex sm:justify-between">
          <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />
  
          <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
            {loading && <SkeletonSchema grid={3} />}
            {filteredProducts.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {!loading && filteredProducts.length === 0 && <p>No hay productos</p>}
          </div>
        </div>
      </div>
    );
  }