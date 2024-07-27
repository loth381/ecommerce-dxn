import React from "react";
import Modal from "react-modal";

const Mapa: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-row px-4 lg:px-20 py-20 gap-4">
      <div className="relative w-full lg:w-1/2 h-64 lg:h-96 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d971.2907636581554!2d-74.20727426996872!3d-13.152112876173774!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA5JzA3LjciUyA3NMKwMTInMjUuOSJX!5e0!3m2!1ses!2sus!4v1721975726860!5m2!1ses!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Mapa de la Ubicación"
        />
      </div>
      <div className="w-full lg:w-1/2 pl-4 mt-4 lg:mt-0 flex flex-col justify-center">
        <h1 className="text-2xl lg:text-7xl font-bold text-gray-800 transition-colors duration-300 hover:text-red-700 dark:text-slate-100 dark:hover:text-red-700">
          Nuestro Local
        </h1>
        <p className="mt-2 lg:text-xl text-gray-600 transition-opacity duration-300 hover:opacity-80 dark:text-slate-100">
          Ubicados en Andres Avelino Caceres,<br />
          Calle lince 124 <br />
          Ayacucho 05001, Perú, 
         
        </p>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Mapa Modal"
        className="flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
        >
          X
        </button>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d971.2907636581554!2d-74.20727426996872!3d-13.152112876173774!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA5JzA3LjciUyA3NMKwMTInMjUuOSJX!5e0!3m2!1ses!2sus!4v1721975726860!5m2!1ses!2sus"
          width="100%" // Ajusta el ancho para ser responsivo
          height="400" // Ajusta el alto según tus necesidades
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Mapa de la Ubicación"
        />
      </Modal>
    </div>
    
  );
};

export default Mapa;
