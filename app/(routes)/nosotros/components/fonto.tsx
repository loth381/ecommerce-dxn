import { FaLightbulb, FaUsers, FaUserShield } from "react-icons/fa";

const FondoAbout = () => {
    return (
        <div className="rounded-lg py-20 px-4 sm:py-36 sm:px-8 md:px-16 lg:px-24 xl:px-48 mx-auto flex flex-col items-center gap-8">
            <div className="bubble-element Group bubble-r-container flex flex-col lg:flex-row items-center gap-8 p-8 sm:p-16 rounded-xl shadow-lg bg-red-200">
                <div className="flex-1 max-w-full lg:max-w-md">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        About <span className="text-red-800">Zeroqode</span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed py-4">
                        Founded in 2016, Zeroqode is one of the no-code pioneers and industry leaders. We have delivered over 300 no-code projects and built 651 plugins, revolutionizing the way businesses operate and innovate without traditional coding.
                    </p>
                </div>

                <div className="flex flex-col gap-8 my-8 lg:my-0 px-0 sm:px-8 lg:px-16 z-14">
                    <div className="flex items-start gap-4 pt-6">
                        <div className="w-10 sm:w-12 lg:w-14">
                            <FaLightbulb size={32} className="sm:size-10 lg:size-14" />
                        </div>
                        <div className="flex flex-col flex-grow">
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Ultimate Solution</h2>
                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">
                                Zeroqode has everything needed to launch your ideas fast and easy. It is a place for all things no-code - development services, backends, and web2native.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 pt-6">
                        <div className="w-10 sm:w-12 lg:w-14">
                            <FaUsers size={32} className="sm:size-10 lg:size-14"/>
                        </div>
                        <div className="flex flex-col flex-grow">
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Lightning Fast</h2>
                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">
                                Codeless solutions make launching new products up to 10 times faster than traditional programming. Validate your product in weeks, not months!
                            </p>
                        </div>
                    </div>  
                    <div className="flex items-start gap-4 pt-6">
                        <div className="w-10 sm:w-12 lg:w-14">
                            <FaUserShield size={32} className="sm:size-10 lg:size-14" />
                        </div>
                        <div className="flex flex-col flex-grow">
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Cost Efficient</h2>
                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">
                                Start saving your team time and budget now! You can do much more with less efforts invested in both development and maintenance of an app.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FondoAbout;
