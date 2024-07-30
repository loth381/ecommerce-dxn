import { FaLightbulb, FaUsers, FaUserShield } from "react-icons/fa";

const FondoAbout = () => {
    return (
        <div className="rounded-lg py-20 px-4 sm:py-36 sm:px-8 md:px-16 lg:px-24 xl:px-48 mx-auto flex flex-col items-center gap-8">
            <div className="bubble-element Group bubble-r-container flex flex-col lg:flex-row items-center gap-8 p-8 sm:p-14 rounded-xl shadow-lg bg-red-200">
                <div className="flex-1 max-w-full lg:max-w-md ">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4">
                    Nuestro <span className="text-red-800">Compromiso</span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed py-4">
                    En DXN, somos un equipo comprometido y dedicado a proporcionar productos de salud de alta calidad. Nos enfocamos en apoyar a nuestros nuevos integrantes en su viaje hacia el éxito, enfatizando la importancia de nuestros valores en cada paso del camino.                    </p>
                </div>

                <div className="flex flex-col gap-8 my-8 lg:my-0 px-0 sm:px-8 lg:px-16 z-14">
                    <div className="flex items-start gap-4 pt-6">
                        <div className="w-10 sm:w-12 lg:w-14">
                            <FaLightbulb size={32} className="sm:size-10 lg:size-14" />
                        </div>
                        <div className="flex flex-col flex-grow">
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Misión</h2>
                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">
                            Nuestra misión es empoderar a las personas para que mejoren su calidad de vida a través de productos innovadores y un sólido sistema de apoyo.                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 pt-6">
                        <div className="w-10 sm:w-12 lg:w-14">
                            <FaUsers size={32} className="sm:size-10 lg:size-14" />
                        </div>
                        <div className="flex flex-col flex-grow">
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Visión</h2>
                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">
                            Aspiramos a ser líderes en el sector de la salud y el bienestar, creando un impacto positivo en la vida de las personas y fomentando un entorno de crecimiento y desarrollo.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 pt-6">
                        <div className="w-10 sm:w-12 lg:w-14">
                            <FaUserShield size={32} className="sm:size-10 lg:size-14" />
                        </div>
                        <div className="flex flex-col flex-grow">
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Valores </h2>
                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">
                            En DXN, nos guiamos por la integridad y la honestidad en todas nuestras acciones. Fomentamos un entorno de colaboración y respeto, donde cada miembro es apoyado en su crecimiento. Buscamos la innovación continua para mejorar nuestros productos y servicios, promoviendo el desarrollo personal y profesional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FondoAbout;
