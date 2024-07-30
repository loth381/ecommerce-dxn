import Image from "next/image";
import FondoAbout from "./components/fonto";
import Mienbros from "./components/mienbros";

export default function Page() {
  return (
    <>
      <div className=" py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 md:px-16 lg:px-36">
          <div className="flex-1 max-w-lg mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
              Sobre <span className="text-red-800">Nosotros</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed py-4 text-gray-600">
              Somos un equipo de Ayacucho  con más de 2 años de experiencia en DXN. Nos especializamos en guiar a nuevos integrantes en el ámbito de la venta de nuestros productos, resaltando sus beneficios para la salud y el bienestar. Trabajar con DXN ofrece una oportunidad única para transformar tu vida y alcanzar tus metas personales. Nos dedicamos a empoderar a cada miembro con las herramientas y conocimientos necesarios para prosperar en este negocio. Únete a nosotros y descubre cómo DXN puede ser el cambio que estás buscando.
            </p>
          </div>
          <div className="flex-1 max-w-md">
            <Image
              src="/homedxn.jpeg"
              alt="Imagen de DXN"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
      <FondoAbout />
      <Mienbros />
    </>
  );
}
