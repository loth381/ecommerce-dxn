/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselProductProps {
  images: {
    data: {
      id: number;
      attributes: {
        url: string;
      };
    }[];
  };
}

const CarouselProduct = (props: CarouselProductProps) => {
  const { images } = props;

  // Verificar que images y images.data están definidos y que images.data es un array
  const hasImages = Array.isArray(images?.data) && images.data.length > 0;

  return (
    <div className="relative sm:px-16 px-4">
      <Carousel>
        <CarouselContent>
          {hasImages ? (
            images.data.map((image) => (
              <CarouselItem key={image.id}>
                <img
                  src={`${image.attributes.url}`}
                  alt={`Product Image ${image.id}`}
                  className="w-full h-auto object-cover rounded-lg"
                  loading="lazy" 
                />
              </CarouselItem>
            ))
          ) : (
            <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-lg"> {/* Cambiado: Contenedor estilizado para mensaje "No images available" */}
              <p className="text-gray-500">No images available</p>
            </div>
          )}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:left-4 z-10" /> {/* Cambiado: Añadido z-10 para asegurar visibilidad sobre el contenido */}
        <CarouselNext className="hidden sm:flex sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-4 z-10" /> {/* Cambiado: Añadido z-10 para asegurar visibilidad sobre el contenido */}
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
