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
          <span className="text-green-500">Experiencia</span>
        </div>
        <div className="px-4">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <FaStore />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Desarrollador Ecommerce
                {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                  Latest
                </span> */}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                American Cotton 13th, 2022
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <IoPeople />
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Desarrollador Freelance
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2022
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Exp;
