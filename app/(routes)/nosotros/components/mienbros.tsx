const miembrosData = [
    { id: 1, name: "Vlad", role: "CEO, Co-Founder", imageUrl: "/slider-image.jpg" },
    { id: 2, name: "Jane Smith", role: "CTO", imageUrl: "/homedxn01.webp" },
    { id: 3, name: "Alice Johnson", role: "Project Manager", imageUrl: "/homedxn02.webp" },
    { id: 4, name: "Michael Brown", role: "Lead Developer", imageUrl: "/homedxn03.webp" },
];

const Miembros = () => {
    return (
        <div className="py-32 ">
            <div className="text-center mb-12">
                <h1 className="font-bold text-5xl py-4 text-red-600">Nuestro Equipo</h1>
                <p className="text-3xl text-gray-700">Team</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-5 md:px-10 lg:px-20">
                {miembrosData.map((miembro) => (
                    <div key={miembro.id} className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
                        <div className="relative w-full h-48 sm:h-64 md:h-80 bg-gray-200 2xl:h-96">
                            <div className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-300" style={{ backgroundImage: `url(${miembro.imageUrl})` }} />
                        </div>
                        <div className="p-4 text-center">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{miembro.name}</h2>
                            <p className="text-base sm:text-lg text-gray-600">{miembro.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Miembros;


<style>

</style>