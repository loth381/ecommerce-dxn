import Head from "next/head";
import Image from "next/image";
import FondoAbout from "./components/fonto";
import Mienbros from "./components/mienbros";

export default function Page() {
  return (
    <>
    <Head>
        <title>Sobre Nosotros | DXN Ayacucho</title>
        <meta name="description" content="Conoce más sobre Zeroqode, pioneros en la revolución no-code, entregando más de 300 proyectos y 651 plugins desde 2016." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sobre Nosotros | DXN Ayacucho" />
        <meta property="og:description" content="Conoce más sobre Zeroqode, pioneros en la revolución no-code, entregando más de 300 proyectos y 651 plugins desde 2016." />
        <meta property="og:image" content="https://dxnayacucho.vercel.app/categorias03.jpeg" />
      </Head>
    <div>
      <div className="px-4 md:px-16 lg:px-36 lg:py-52 py-16 mx-auto flex justify-around flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 max-w-md">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About <span className="text-red-800">Zeroqode</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed py-4">
            Founded in 2016, Zeroqode is one of the no-code pioneers and
            industry leaders. We have delivered over 300 no-code projects and
            built 651 plugins, revolutionizing the way businesses operate and
            innovate without traditional coding.
          </p>
        </div>
        <div className="flex-1 max-w-md">
          <Image
            src="/categorias03.jpeg"
            alt="Imagen de Zeroqode"
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <FondoAbout />
      <Mienbros/>
    </div>
    </>
  );
}
