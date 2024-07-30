/* eslint-disable @next/next/no-img-element */
// components/SocialMediaVideos.tsx

"use client"; 

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  'https://bavet.eu/assets/uploads/2023/03/BAVET-Teambuilding_Koksijde-2021-66-1450x967.jpg',
  'https://bavet.eu/assets/uploads/2023/03/BAVET-Teambuilding_Koksijde-2021-52-2-1450x967.jpg',
  'https://bavet.eu/assets/uploads/2023/03/2022-Bavet-Teambuilding-455-3-1450x967.jpg',
  'https://bavet.eu/assets/uploads/2023/03/2022-Bavet-Teambuilding-518-1450x967.jpg',
  'https://bavet.eu/assets/uploads/2023/03/BAVET-Teambuilding_Koksijde-2021-66-1450x967.jpg' // Añadir una imagen extra para el bucle continuo
];

const SocialMediaVideos : React.FC = () => {

     

  return (
    <section className="relative w-full mx-auto my-8 px-4 overflow-hidden py-16 ">
       <div className="flex justify-between items-center mb-6 py-3">
        <h2 className="lg:text-4xl  text-2xl font-bold">Nuestras Redes Sociales</h2>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/tu_cuenta"
            className="text-3xl text-blue-800"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/tu_cuenta"
            className="text-3xl text-pink-600"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@tu_cuenta"
            className="text-3xl text-black dark:text-white"
          >
            <FaTiktok/>
          </a>
          <a
            href="https://www.youtube.com/tu_cuenta"
            className="text-3xl text-red-600"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
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

export default SocialMediaVideos;
