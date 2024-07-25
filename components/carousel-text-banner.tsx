"use client";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export const dataCarouselTop = [
  {
    id: 1,
    title: "Envío en 24/48 h",
    description: "Como cliente VIP, tus envíos en 24/48 horas. Obtén más información.",
    link: "#", // Actualiza con la URL real
  },
  {
    id: 2,
    title: "Consigue hasta un -25% en compras superiores a S/40",
    description: "-20% al gastar S/100 o -25% al gastar S/150. Usa el código Cafecito.",
    link: "#", // Actualiza con la URL real
  },
  {
    id: 3,
    title: "Devolución y entregas gratuitas",
    description: "Como cliente VIP, tienes envíos y devoluciones gratis.",
    link: "#", // Actualiza con la URL real
  },
  {
    id: 4, // ID único
    title: "Compra novedades",
    description: "Todas las novedades al 50% de descuento.",
    link: "#", // Actualiza con la URL real
  },
];

const CarouselTextBanner = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-200 dark:bg-primary">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {dataCarouselTop.map(({ id, title, link, description }) => (
            <CarouselItem
              key={id}
              onClick={() => router.push(link)}
              className="cursor-pointer"
            >
              <div>
                <Card className="shadow-none border-none bg-transparent">
                  <CardContent className="flex flex-col items-center justify-center p-2 text-center">
                    <p className="sm:text-lg text-wrap dark:text-secondary">
                      {title}
                    </p>
                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselTextBanner;
