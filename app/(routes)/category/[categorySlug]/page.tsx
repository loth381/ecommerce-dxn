"use client";
import { useGetCategoryProducts } from "@/api/getCategoryProduct";
import SkeletonSchema from "@/components/skeletonSchema";
import { Separator } from "@/components/ui/separator";
import { ProductType } from "@/types/product";
import { ResponseType } from "@/types/response";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import FiltersControlsCategory from "./components/filters-controls-category";
import ProductCard from "./components/product-card";

export default function Page() {
  const params = useParams();
  const { categorySlug } = params;
  const { result, loading }: ResponseType = useGetCategoryProducts(categorySlug);
  const [filterOrigin, setFilterOrigin] = useState("");
  const router = useRouter();

  const filteredProducts = result && Array.isArray(result)
    ? (filterOrigin === ""
      ? result
      : result.filter(
          (product: ProductType) => product.attributes.origin === filterOrigin
        ))
    : [];

  return (
    <div className="max-w-6xl py-4 px-1  mx-auto sm:py-16 sm:px-24">
      {result && Array.isArray(result) && result.length > 0 && !loading && (
        <h1 className="text-5xl px-5 font-bold">
          {result[0].attributes.category.data.attributes.categoryName}
        </h1>
      )}
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />

        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {loading && <SkeletonSchema grid={3} />}
          {!loading && filteredProducts.length > 0 && filteredProducts.map((product: ProductType) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {!loading && filteredProducts.length === 0 && <p>No hay productos</p>}
        </div>
      </div>
    </div>
  );
}
