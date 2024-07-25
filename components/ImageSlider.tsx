'use client'; // Marca este archivo como componente del cliente

import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules'; // Quitamos la importación de Navigation
import { Swiper, SwiperSlide } from 'swiper/react';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  'https://bavet.eu/assets/uploads/2023/03/BAVET-Teambuilding_Koksijde-2021-66-1450x967.jpg',
  'https://bavet.eu/assets/uploads/2023/03/BAVET-Teambuilding_Koksijde-2021-52-2-1450x967.jpg',
  'https://bavet.eu/assets/uploads/2023/03/2022-Bavet-Teambuilding-455-3-1450x967.jpg',
  'https://bavet.eu/assets/uploads/2023/03/2022-Bavet-Teambuilding-518-1450x967.jpg',
  'https://bavet.eu/assets/uploads/2023/03/BAVET-Teambuilding_Koksijde-2021-66-1450x967.jpg' // Añadir una imagen extra para el bucle continuo
];

const ImageCarousel: React.FC = () => {
  return (
    <section className="relative w-full mx-auto my-8 px-4 overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]} // Quitamos Navigation
        spaceBetween={10} // Espacio entre imágenes
        slidesPerView={1} // Mostrar una imagen a la vez por defecto
        loop={true} // Hacer el carrusel cíclico
        autoplay={{ delay: 500, disableOnInteraction: false }} // Desplazar automáticamente cada 0.5 segundos
        pagination={{ clickable: true }}
        speed={9000} // Aumentar la velocidad de la transición
        breakpoints={{
          640: {
            slidesPerView: 1, // Mostrar una imagen a la vez en pantallas pequeñas
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2, // Mostrar dos imágenes a la vez en pantallas medianas
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3, // Mostrar tres imágenes a la vez en pantallas grandes
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105">
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-90 transition-opacity duration-300">
                <span className="text-white text-sm md:text-lg font-semibold">Image {index + 1}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .mySwiper {
          width: 100%;
          height: auto;
        }
        .swiper-wrapper {
          transition-timing-function: ease-in-out; /* Cambia la transición para hacerla más suave */
        }
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .swiper-pagination-bullet {
          background-color: #ffffff;
        }
        .swiper-pagination-bullet-active {
          background-color: #007bff;
        }
      `}</style>
    </section>
  );
};

export default ImageCarousel;
