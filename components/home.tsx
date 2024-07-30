"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const HomeBanner: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const router = useRouter();
  const items = [
    {
      id: 1,
      name: "Productos de Ganoderma",
      description: "Descubre los beneficios del Ganoderma para tu salud.",
      imageUrl: "/homedxn01.webp",
    },
    {
      id: 2,
      name: "Afiliaciones DXN",
      description: "Únete a nuestra red de afiliados y comienza tu propio negocio.",
      imageUrl: "/homedxn02.webp",
    },
    {
      id: 3,
      name: "Plan de Marketing",
      description: "Conoce nuestro plan de marketing y maximiza tus ganancias.",
      imageUrl: "/homedxn03.webp",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-700 ${
            current === item.id - 1 ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
            <h2 className="text-3xl md:text-5xl font-bold shadow-md">{item.name}</h2>
            <p className="mt-2 text-base md:text-lg shadow-md">{item.description}</p>
            <button
              onClick={() => router.push("/allproducts")}
              className="mt-4 px-6 py-2 bg-gradient-to-r bg-slate-900 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
            >
              Comprar
            </button>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((item) => (
          <div
            key={`indicator-${item.id}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === items.findIndex((el) => el.id === item.id) ? "bg-slate-900" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
