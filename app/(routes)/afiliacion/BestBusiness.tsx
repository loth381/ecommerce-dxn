import { buttonVariants } from "@/components/ui/button";
import { Award, Book, Clock, Gift, HandCoins, UserCheck } from "lucide-react";
import Link from "next/link";

export type BestBusinessData = {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}[];

const dataFeaturesBusiness: BestBusinessData = [
  {
    id: 1,
    icon: (
      <HandCoins size={40} className="hover:text-red-700  cursor-pointer" />
    ),
    title: "Ingresos Adicionales",
    description:
      "Genera ingresos adicionales vendiendo productos de alta calidad y formando tu propio equipo de ventas.",
  },
  {
    id: 2,
    icon: <Book size={40} className="hover:text-red-700  cursor-pointer" />,
    title: "Capacitación y Soporte",
    description:
      "Recibe capacitación constante y soporte para desarrollar tus habilidades y maximizar tu éxito.",
  },
  {
    id: 3,
    icon: <Clock size={40} className="hover:text-red-700  cursor-pointer" />,
    title: "Horarios Flexibles",
    description:
      "Disfruta de la flexibilidad de trabajar en tus propios horarios y desde cualquier lugar.",
  },
  {
    id: 4,
    icon: <Gift size={40} className="hover:text-red-700  cursor-pointer" />,
    title: "Descuentos Exclusivos",
    description:
      "Accede a descuentos exclusivos en productos DXN para uso personal y para tu negocio.",
  },
  {
    id: 5,
    icon: (
      <UserCheck size={40} className="hover:text-red-700  cursor-pointer" />
    ),
    title: "Comunidad Global",
    description:
      "Forma parte de una comunidad global de emprendedores que comparten tus mismos objetivos.",
  },
  {
    id: 6,
    icon: <Award size={40} className="hover:text-red-700  cursor-pointer" />,
    title: "Reconocimientos y Premios",
    description:
      "Obtén reconocimientos y premios por tus logros y esfuerzo dentro de la red DXN.",
  },
];

function BestBusiness() {
  return (
    <div className="relative px-6 py-20 md:py-1 " id="features">
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div className="content-center">
          <h2 className="text-6xl font-semibold">
            <span className="block text-red-700 ">Beneficios de</span>
            Afiliarse a DXN
          </h2>
          <p className="max-w-md text-xl mt-10">
            Únete a Nuestro equipo y aprovecha una variedad de beneficios
            diseñados para ayudarte a alcanzar el éxito y mejorar tu vida
            financiera.
          </p>
          <div className="my-8">
             <Link
              href="https://wa.me/51987654321?text=Hola%2C%20quiero%20afiliarme%20a%20DXN!"
              className={buttonVariants()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Únete ahora
            </Link>
          </div>
        </div>

        <div className="grid items-center py-5 md:p-8">
          {dataFeaturesBusiness.map(({ id, icon, title, description }) => (
            <div key={id} className="mb-5">
              <div className="flex items-center">
                {icon}
                <div className="ml-4">
                  <h3 className="text-lg font-medium hover:text-red-700">{title}</h3>
                  <p className="text-gray-600 dark:text-slate-100">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestBusiness;
