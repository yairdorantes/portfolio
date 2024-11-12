import { FaStore, FaUserTie } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

const Exp = () => {
  return (
    <section id="exp" className="bg-black  text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="w-fit flex gap-2 items-center  mb-10 text-sm p-2 border border-gray-600 border-opacity-80 rounded-full">
          <FaUserTie /> Experiencia
        </div>
        <div className="text-3xl mb-10">
          <span className="text-[#e5b120] font-semibold">Experiencia</span>
        </div>
        <div className="px-4">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-900">
                <FaStore color="#e5b120" />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-[#30be8a]">
                Desarrollador Sector Financiero
                {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                  Latest
                </span> */}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
                Icarus software 2024
              </time>
              <ul className="list-disc ml-4 text-gray-200">
                <li>
                  Desarrollo, mantenimiento e implementación de APIs integradas
                  con diversos sistemas financieros.
                </li>
              </ul>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-900">
                <FaStore color="#e5b120" />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-[#30be8a]">
                Desarrollador Ecommerce
                {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                  Latest
                </span> */}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
                American Cotton 2023
              </time>
              <ul className="list-disc ml-4 text-gray-200">
                <li>Diseño y desarrollo de una PWA para Fulfillment</li>
                <li>
                  Diseño y desarrollo de un bot de invitaciones integrado con
                  WhatsApp.
                </li>
              </ul>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-900">
                <IoPeople color="#e5b120" />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-[#30be8a]">
                Desarrollador Freelance
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
                2022
              </time>
              <ul className="list-disc ml-4 text-gray-200">
                <li>
                  Desarrollo de un sistema de escaneo y generación de entradas
                  para una expo de más de 1,000 asistentes, optimizando el
                  control de acceso para una agencia de viajes
                </li>
                <li>
                  Desarrollo un sistema de gestión de pacientes y citas para un
                  consultorio dental.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Exp;
