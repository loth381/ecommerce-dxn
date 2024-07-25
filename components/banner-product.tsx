import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
  return (
    <>
      <div className="mt-4 text-center">
        <p className="text-lg">Sumérgete en una experiencia única</p>
        <h4 className="mt-2 text-5xl font-extrabold uppercase">Café Exquisito</h4>
        <p className="my-2 text-lg">Despierta tus sentidos con cada sorbo</p>
        <Link href="/allproducts" className={buttonVariants()} aria-label="Comprar café">
          Comprar
        </Link>
      </div>
      <div 
        className="h-[350px] bg-cover lg:h-[600px] bg-[url('/slider-image.jpg')] bg-center mt-5"
        role="img"
        aria-label="Café exquisito en un fondo atractivo"
      >
        
      </div>
    </>
  );
};

export default BannerProduct;
