const Video = () => {
    return (
        <div className="flex flex-col lg:flex-row px-4 lg:px-28 lg:py-48  py-20 gap-10">
            <div className="w-full lg:w-1/2 pl-4 mt-4 px-10 lg:mt-0 flex flex-col justify-center">
                <h2 className="text-4xl lg:text-7xl text-center lg:text-left  font-bold text-gray-800 transition-colors duration-300 hover:text-red-700 dark:text-slate-100 dark:hover:text-red-700">
                Únete a la Familia DXN
                </h2>
                <p className="mt-2 lg:text-xl text-gray-600 transition-opacity duration-300 hover:opacity-80 dark:text-slate-100">
                Descubre cómo convertirte en parte de nuestra comunidad DXN y aprovecha los increíbles beneficios que ofrecemos a nuestros afiliados. Mira el video a continuación y da el primer paso hacia un futuro más saludable y próspero.
                </p>
            </div>
            <div className="relative w-full lg:w-1/2 h-64 lg:h-96 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
                <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/4WYemcO0iC8" // Reemplaza TU_VIDEO_ID con el ID del video de YouTube
                    title="Video de Afiliación"
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Video;
