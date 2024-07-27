"use client"

import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
  return (
    <section className="p-5 sm:p-20 text-center">
      {/* Encapsulado en <section> para una mejor semántica */}
      <h2 className="uppercase font-black text-5xl text-primary">
        Afiliate con nosotros 
      </h2>
      <h3 className="mt-3 font-semibold">
       y forma parte de nuestro gran equipo
      </h3>
      <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
        <Link href="/afiliacion" className={buttonVariants()} aria-label="Comprar ahora">
        Más Información
        </Link>
      </div>
    </section>
  );
};

export default BannerDiscount;
