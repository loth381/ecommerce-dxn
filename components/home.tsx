"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const HomeBanner: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const router = useRouter()
  const items = [
    {
      name: "Gourmet Dishes",
      description:
        "Experience the best gourmet dishes crafted by our top chefs.",
      imageUrl: "https://i.ibb.co/qCkd9jS/img1.jpg",
    },
    {
      name: "Fine Dining",
      description: "Enjoy a fine dining experience in a luxurious setting.",
      imageUrl: "https://i.ibb.co/jrRb11q/img2.jpg",
    },
    {
      name: "Exquisite Desserts",
      description: "Indulge in our exquisite selection of desserts.",
      imageUrl: "https://i.ibb.co/NSwVv8D/img3.jpg",
    },
    {
      name: "Wine Selection",
      description:
        "Choose from a wide variety of wines to complement your meal.",
      imageUrl: "https://i.ibb.co/Bq4Q0M8/img4.jpg",
    },
    {
      name: "Cozy Ambiance",
      description: "Relax in our cozy and inviting ambiance.",
      imageUrl: "https://i.ibb.co/jTQfmTq/img5.jpg",
    },
    {
      name: "Outdoor Seating",
      description: "Enjoy your meal in our beautiful outdoor seating area.",
      imageUrl: "https://i.ibb.co/RNkk6L0/img6.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-500 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
            <h2 className="text-4xl md:text-6xl font-bold">{item.name}</h2>
            <p className="mt-4 text-lg md:text-2xl">{item.description}</p>
            <button onClick={() => router.push("/allproducts")} className="mt-8 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">
              Pedir
            </button>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300"
          onClick={prevSlide}
        >
          <ArrowLeft className="text-black" />
        </button>
        <button
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300"
          onClick={nextSlide}
        >
          <ArrowRight className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
