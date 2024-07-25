"use client"

import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
  return (
    <section className="p-5 sm:p-20 text-center">
      {/* Encapsulado en <section> para una mejor semántica */}
      <h2 className="uppercase font-black text-2xl text-primary">
        Consigue hasta un -25%
      </h2>
      <h3 className="mt-3 font-semibold">
        -20% al gastar s/100 o -25% al gastar s/150. Usa el código <span className="font-bold">Avendaño</span>
      </h3>
      <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
        <Link href="/allproducts" className={buttonVariants()} aria-label="Comprar ahora">
          Comprar
        </Link>
        <Link href="/allproducts" className={buttonVariants({ variant: "outline" })} aria-label="Más información">
          Más Información
        </Link>
      </div>
    </section>
  );
};

export default BannerDiscount;
