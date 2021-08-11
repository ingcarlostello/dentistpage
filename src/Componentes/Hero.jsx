import React from "react";

import dentista1 from "../assets/dentista1.jpg";
import heroLabels from "../labels/heroLabels";

const Hero = () => {
  const estilos = {
    backgroundImage: `url(${dentista1})`,
    height: "50rem",
  };

  return (
    <>
      <section
        id="hero"
        style={estilos}
        className="bg-cover bg-no-repeat bg-center"
      >
        <div className="grid-cols-1 sm:grid grid-cols-2 gap-4 h-full bg-gray-900 bg-opacity-50">
          <div className="h-full grid items-center justify-items-center sm:grid items-center justify-items-center">
            <div className="w-2/3">
              <div className="text-4xl sm:text-5xl font-bold text-indigo-900">{heroLabels.heroText}</div>
              <div className="text-lg mt-4 text-white">{heroLabels.heroParagraph}</div>
              <div className="mt-8">
                <button class="text-lg font-bold mr-4 shadow-md h-14 w-48 px-5 text-gray-50 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 md:h-12 w-12 mb-4">
                  <i className="fas fa-calendar-check mr-3.5"></i>
                  <span>Agenta tu cita</span>
                </button>
                <button class="text-lg font-bold shadow-md h-14 w-48 px-5 text-indigo-700 transition-colors duration-150 bg-gray-50 rounded-lg focus:shadow-outline hover:bg-indigo-800 hover:text-gray-50 md:h-12 w-12">
                  <i class="fas fa-briefcase mr-3.5"></i>
                  <span>Servicios</span>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden sm:bg-red-900">columna2</div>
        </div>
      </section>
    </>
  );
};

export default Hero;
