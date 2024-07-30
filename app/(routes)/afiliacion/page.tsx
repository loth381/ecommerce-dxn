"use client";

import BestBusiness from "./BestBusiness";
import ContactForm from "./ContactForm";
import Mapa from "./mapa";
import Video from "./video";

export default function AffiliatePage() {
  const openMailClient = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=u19217724@gmail.com', '_blank');
  };
  return (

    <>
    <div className="relative bg-gray-100 py-0 px-0 md:px-16 md:py-20 dark:bg-slate-900">
      <BestBusiness />
      <Video/>
      <div className="container md:py-36 mx-auto py-28 flex flex-col lg:flex-row items-start lg:items-start gap-8">
        {/* Información de Contacto */}
        <div id="join" className="lg:w-1/2 mb-8 lg:mb-0 px-1">
          <h1 className="text-4xl font-bold mb-4 md:text-7xl text-gray-800 dark:text-slate-100">
            Contáctanos
          </h1>
          <p className="text-gray-600 leading-relaxed mb-4 text-lg dark:text-slate-100">
            Si tienes alguna pregunta o necesitas más información sobre cómo
            afiliarte, no dudes en contactarnos a través de los siguientes
            medios:
          </p>
          <p className="text-gray-800 mb-2 dark:text-slate-100">
            <strong>Email:</strong>{" "}
            <a href="javascript:void(0);"  className="underline dark:text-slate-100" onClick={openMailClient} rel="noopener noreferrer">
              u19217724@gmail.com
            </a>
          </p>
          <p className="text-gray-800 mb-2 dark:text-slate-100">
            <strong>WhatsApp:</strong>{" "}
            <a href="https://wa.me/51930134408" className="underline" target="_blank" rel="noopener noreferrer"  >
               930 134 408
            </a>
          </p>
          <p className="text-gray-800 mb-2 dark:text-slate-100">
            <strong>Teléfono:</strong>930 134 408
          </p>
          <p className="text-gray-800 mb-2 dark:text-slate-100">
            <strong>Dirección:</strong> Andres Avelino Caceres, Calle lince 124 - Ayacucho
          </p>
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-slate-100">
                Soporte al Cliente
              </h2>
              <p className="text-gray-600 mb-4 dark:text-slate-100">
                Nuestro equipo de soporte está disponible las 24 horas para
                resolver cualquier inquietud o pregunta que puedas tener.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-slate-100">
                Comentarios y Sugerencias
              </h2>
              <p className="text-gray-600 mb-4 dark:text-slate-100">
                Valoramos tus comentarios y estamos trabajando continuamente
                para mejorar DXN. Tu opinión es crucial para dar forma al futuro
                de DXN.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-slate-100">
                Consultas del Producto
              </h2>
              <p className="text-gray-600 dark:text-slate-100">
                Para consultas relacionadas con los Productos por favor contáctanos en{" "}
                <a
                  href="mailto:u19217724@gmail.com"
                  className="underline text-red-700 hover:text-blue-600" onClick={openMailClient} rel="noopener noreferrer"
                >
                  u19217724@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* Formulario de Afiliación */}
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800 text-center">
            Afíliate a DXN 
          </h1>
          <p className="text-gray-600 mb-4 text-center">
            Únete a nuestra equipo y disfruta de los beneficios exclusivos de
            ser un afiliado. Rellena el formulario a continuación para empezar.
          </p>
          <ContactForm />
        </div>
      </div>
      <Mapa/>
    </div>
    </>
  );
}
