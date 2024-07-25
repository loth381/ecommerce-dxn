"use client";

import { UseLovedProducts } from "@/hooks/use-loved-products";
import LovedItemProduct from "./components/loved-item-product";

export default function Page() {
  const { lovedItems } = UseLovedProducts();

  return (
    <main className="max-w-4xl mx-auto py-4 sm:py-8 px-4 sm:px-6">
      {/* Encabezado de la página */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold sm:text-3xl">Productos que te gustan</h1>
      </header>

      {/* Mensaje cuando no hay productos */}
      {lovedItems.length === 0 ? (
        <p className="text-center text-gray-600">No hay productos en tus me gusta.</p>
      ) : (
        <section>
          <ul className="space-y-4">
            {lovedItems.map((item) => (
              <LovedItemProduct key={item.id} product={item} />
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
  