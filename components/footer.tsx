"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { Separator } from "./ui/separator";

const dataFooter = [
  {
    id: 1,
    name: "Sobre nosotros",
    link: "/nosotros"
  },
  {
    id: 2,
    name: "Productos",
    link: "/allproducts"
  },
  {
    id: 3,
    name: "Afiliate",
    link: "/afiliacion"
  },
  {
    id: 4,
    name: "Politica de privacidad",
    link: "/PrivacyPolicy"
  },
];

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 cursor-pointer" onClick={() => router.push("/")}>
            <Image
              src={"/dxnlogo.png"}
              width={60}
              height={60}
              alt="Logo DXN"
              className="mr-2 md:mr-4"
            />
            <div className="hidden md:flex flex-col items-center text-center">
              <span className="text-sm md:text-lg">Centro de servicio</span>
              <span className="font-bold text-sm md:text-xl">Huamanga</span>
            </div>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {dataFooter.map((data) => (
              <li key={data.id} className="me-4 md:me-6">
                <Link href={data.link} className="hover:underline text-[15px]">
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-end px-5  items-center mt-2">
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/tu_cuenta"
              className="text-2xl text-blue-800"
            >
              <FaFacebook />
            </a>  
            <a
              href="https://www.instagram.com/tu_cuenta"
              className="text-2xl text-pink-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@tu_cuenta"
              className="text-2xl text-black dark:text-white"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/tu_cuenta"
              className="text-2xl text-red-600"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; 2024
          <Link href="#" className="hover:underline ml-1">Avendaño</Link> 
          Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
