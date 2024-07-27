/* eslint-disable @next/next/no-img-element */
// components/SocialMediaVideos.tsx

"use client"; 

import { useRef } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const posts = [
  {
    id: 1,
    image: "/success.jpg",
    title: "If you have trouble sleeping..",
    content:
      "Try swapping your normal moisturiser for a magnesium cream at night",
  },
  {
    id: 2,
    video: "https://www.youtube.com/embed/FY0R7KsBC2g",
    title: "AM VS PM WELLNESS",
    content: [
      "CoQ10 to support your natural energy",
      "Vitamin D for immune health and overall mood",
      "Probiotic supplement to promote a happy gut",
    ],
  },
  {
    id: 3,
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1249047225965081",
    title: "Signs you need to start using Rosemary shampoo",
  },
  {
    id: 4, // Cambié el ID aquí para evitar duplicados
    image: "/success.jpg",
    title: "If you have trouble sleeping..",
    content:
      "Try swapping your normal moisturiser for a magnesium cream at night",
  },
  {
    id: 5, // Cambié el ID aquí para evitar duplicados
    video: "https://www.youtube.com/embed/FY0R7KsBC2g",
    title: "AM VS PM WELLNESS",
    content: [
      "CoQ10 to support your natural energy",
      "Vitamin D for immune health and overall mood",
      "Probiotic supplement to promote a happy gut",
    ],
  },
  {
    id: 6, // Cambié el ID aquí para evitar duplicados
    video:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/854918129304311",
    title: "Signs you need to start using Rosemary shampoo",
  },
];

const SocialMediaVideos = () => {
  const swiperRef = useRef<any>(null); // Crear referencia al Swiper

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="relative w-full py-28 mx-auto my-12 px-2 lg:px-12 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
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
            <FaTiktok />
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
        ref={swiperRef} // Asignar referencia al Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={1} // Inicia mostrando 1 slide por defecto
        loop={true}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        speed={900}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="mySwiper "
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id} >
            <div className="flex-shrink-0 w-full max-w-md bg-slate-900 rounded-lg shadow-lg overflow-hidden">
              {post.video ? (
                <iframe
                  src={post.video}
                  title={post.title}
                  className="w-full h-96"
                  allowFullScreen
                ></iframe>
              ) : (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-96 object-cover"
                />
              )}
            </div>
          </SwiperSlide>
        ))}

        <div className="flex justify-between p-4">
        <button
          onClick={handlePrev}
          className="bg-gray-800  p-3 rounded-full shadow hover:bg-gray-800 transition duration-200 flex items-center justify-center cursor-pointer dark:bg-white dark:hover:bg-white"
        >
          <HiChevronLeft className="text-white text-3xl dark:text-black "  />
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-800  p-3 rounded-full shadow hover:bg-gray-800 transition duration-200 flex items-center justify-center cursor-pointer dark:bg-white dark:hover:bg-white"
        >
          <HiChevronRight className="text-white text-3xl dark:text-black" />
        </button>
      </div>
      </Swiper>

      

      <style jsx>{`
        .mySwiper {
          width: 100%;
          height: auto;
        }
        .swiper-wrapper {
          transition-timing-function: ease-in-out;
        }
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }
          .swiper-pagination{
          display: flex;

          }
        .swiper-pagination-bullet {
          background-color: #000000 !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #020200 !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          display: none; /* Ocultar botones por defecto */
        }
      `}</style>
    </section>
  );
};

export default SocialMediaVideos;
