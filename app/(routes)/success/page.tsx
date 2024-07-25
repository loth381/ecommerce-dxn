"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageSuccess = () => {
  const router = useRouter();
  return (
    <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="flex justify-center md:min-w-[400px]">
          <Image
            src="/success.jpg"
            alt="Success"
            width={250}
            height={500}
            className="rounded-lg"
            loading="lazy"
          />
        </div>
        <div className="">
          <h1 className="text-3xl">¡Gracias por tu compra!</h1>
          <p className="my-3">
            En breve, nuestro equipo de atención al cliente se pondrá en
            contacto contigo para coordinar la entrega de tu pedido.
          </p>
          <p className="my-3">
            Agradecemos de nuevo tu compra. ¡Esperamos que disfrutes del
            producto!
          </p>
          <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
        </div>
      </div>
    </div>
  );
};

export default PageSuccess;
