import { IoMdLock } from "react-icons/io";
import ffss from "../media/ss.png";
import ss2 from "../media/ss2.png";
import ss3 from "../media/ss3.png";
import ss4 from "../media/ss4.avif";
import ss5 from "../media/ss5.png";
import ss6 from "../media/ss10.jpeg";
import qrImage from "../media/qr.avif";
import HSEFA from "../media/hubspot-integration4.png";
import ss7 from "../media/ss7.png";
import wb from "../media/wb.jpg";
import ss8 from "../media/ss8.png";
import apis from "../media/apis.webp";
import { FaBriefcase, FaGithub } from "react-icons/fa";
const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="bg-black select-none pb-10  text-white p-4"
    >
      <div className="max-w-4xl mx-auto ">
        <div className="w-fit flex gap-2 items-center  mb-10 text-sm p-2 border border-gray-600 border-opacity-80 rounded-full">
          <FaBriefcase />
          Portafolio
        </div>
        <div className="text-3xl mb-10">
          <span className="text-green-500">Portafolio</span>
        </div>

        <div className="flex  flex-wrap gap-5 w-full justify-center">
          <div
            className="bg-cover rounded-2xl w-[95%] sm:w-96 max-w-lg h-64 bg-center "
            style={{
              backgroundImage: `url(${ffss})`,
            }}
          >
            <div className="w-full  relative h-full backdrop-blur-sm bg-black bg-opacity-40">
              <div className="p-2 absolute left-4 top-4 rounded-md bg-white text-black w-fit">
                <IoMdLock />
              </div>
              <div className="absolute py-1 text-sm px-3 border rounded-full bg-opacity-60 bg-black bottom-2 left-2 ">
                PWA Fulfillment ecommerce
              </div>
            </div>
          </div>
          <div
            className="bg-cover w-[95%]  rounded-2xl sm:w-96 h-64 bg-center "
            style={{
              backgroundImage: `url(${qrImage})`,
            }}
          >
            <div className="w-full  relative h-full  bg-black bg-opacity-40">
              <div className="p-2 absolute left-4 top-4 rounded-md bg-white text-black w-fit">
                <IoMdLock />
              </div>
              <div className="absolute  text-sm py-1 px-2  border rounded-full  bg-black bg-opacity-60 bottom-2 left-2 ">
                Sistema de Generación y Escaneo de Códigos QR
              </div>
            </div>
          </div>
          {/* <div
            className="bg-cover w-[95%]  rounded-2xl sm:w-96 h-64 bg-center "
            style={{
              backgroundImage: `url(${HSEFA})`,
            }}
          >
            <div className="w-full  relative h-full  bg-black bg-opacity-40">
              <div className="p-2 absolute left-4 top-4 rounded-md bg-white text-black w-fit">
                <IoMdLock />
              </div>
              <div className="absolute  text-sm py-1 px-2  border rounded-full  bg-black bg-opacity-60 bottom-2 left-2 ">
                Conexión Bidireccional de APIs entre{" "}
                <a
                  target="_blank"
                  href="https://www.hubspot.es"
                  className="underline"
                >
                  HubSpot
                </a>
                ,{" "}
                <a
                  target="_blank"
                  className="underline"
                  href="https://www.edvisor.io"
                >
                  Edvisor
                </a>{" "}
                y{" "}
                <a
                  target="_blank"
                  className="underline"
                  href="https://callitonce.com/"
                >
                  CIO
                </a>
              </div>
            </div>
          </div> */}
          <div
            className="bg-cover w-[95%]  rounded-2xl sm:w-96 h-64 bg-center "
            style={{
              backgroundImage: `url(${ss2})`,
            }}
          >
            <div className="w-full backdrop-blur-sm relative h-full  bg-black bg-opacity-40">
              <div className="p-2 absolute left-4 top-4 rounded-md bg-white text-black w-fit">
                <IoMdLock />
              </div>
              <div className="absolute  text-sm py-1 px-2  border rounded-full  bg-black bg-opacity-60 bottom-2 left-2 ">
                Sistema de invitaciones
              </div>
            </div>
          </div>{" "}
          <div
            className="bg-cover w-[95%]  rounded-2xl sm:w-96 h-64 bg-center "
            style={{
              backgroundImage: `url(${apis})`,
            }}
          >
            <div className="w-full  relative h-full  bg-black bg-opacity-40">
              <div className="p-2 absolute left-4 top-4 rounded-md bg-white text-black w-fit">
                <IoMdLock />
              </div>
              <div className="absolute  text-sm py-1 px-2  border rounded-full  bg-black bg-opacity-60 bottom-2 left-2 ">
                Desarrollo, mantenimiento e implementación de APIs integradas
                con diversos sistemas financieros.
              </div>
            </div>
          </div>
          {/* <div
            className="bg-cover w-[95%] sm:w-96 rounded-2xl max-w-lg h-64 bg-center "
            style={{
              backgroundImage: `url(${ss7})`,
            }}
          >
            <div className="w-full relative h-full  bg-black bg-opacity-20">
              <div className="p-2 absolute left-4 top-4 rounded-md bg-white text-black w-fit">
                <a
                  // href="https://github.com/yairdorantes/WeatherApp"
                  target="_blank"
                >
                  <IoMdLock />
                </a>
              </div>
              <div className="absolute text-sm py-2 px-3 bg-black bg-opacity-60  border rounded-full  bottom-2 left-2 ">
                Sistema integral de gestión de dietas y rutinas para gimnasio
              </div>
            </div>
          </div> */}
          {/* <div
            className="bg-cover w-[95%] sm:w-96 rounded-2xl max-w-lg h-64 bg-center "
            style={{
              backgroundImage: `url(${wb})`,
            }}
          >
            <div className="w-full relative h-full  bg-black bg-opacity-20">
              <div className="p-2 absolute left-4 top-4 rounded-md bg-white text-black w-fit">
                <a
                  href="https://github.com/yairdorantes/WhatsApp"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="absolute text-sm py-1 px-2 bg-black bg-opacity-60  border rounded-full  bottom-2 left-2 ">
                WhatsApp Bot + OpenAI API
              </div>
            </div>
          </div> */}
          <div
            className="bg-cover w-[95%] sm:w-96 rounded-2xl max-w-lg h-64 bg-center "
            style={{
              backgroundImage: `url(${ss6})`,
            }}
          >
            <div className="w-full relative h-full  bg-black bg-opacity-20">
              <div className="p-2 absolute left-4 top-4 rounded-md bg-white text-black w-fit">
                <a
                  href="https://github.com/yairdorantes/WeatherApp"
                  target="_blank"
                >
                  <IoMdLock />
                </a>
              </div>
              <div className="absolute text-sm py-1 px-2 bg-black bg-opacity-60  border rounded-full  bottom-2 left-2 ">
                Sistema de gestión citas Odontológicas
              </div>
            </div>
          </div>
          {/* <div
            className="bg-cover w-[95%] sm:w-96 rounded-2xl max-w-lg h-64 bg-center "
            style={{
              backgroundImage: `url(${ss3})`,
            }}
          >
            <div className="w-full relative h-full  bg-black bg-opacity-20">
              <div className="p-2 absolute left-4 top-4 rounded-md bg-white text-black w-fit">
                <a
                  href="https://github.com/yairdorantes/EnglishApp"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="absolute text-sm py-1 px-3 border rounded-full  bg-opacity-60 bg-black bottom-2 left-2 ">
                App para aprendizaje de Inglés
              </div>
            </div>
          </div> */}
          {/* <div
            className="bg-cover w-[95%] sm:w-96 rounded-2xl max-w-lg h-64 bg-center "
            style={{
              backgroundImage: `url(${ss4})`,
            }}
          >
            <div className="w-full relative h-full  bg-black bg-opacity-20">
              <div className="p-2 absolute left-4 top-4 rounded-md bg-white text-black w-fit">
                <a href="https://github.com/yairdorantes/Facts" target="_blank">
                  <FaGithub />
                </a>
              </div>
              <div className="absolute text-sm py-1 px-3 border rounded-full bg-opacity-60 bg-black bottom-2 left-2 ">
                App de Datos curiosos
              </div>
            </div>
          </div> */}
          {/* <div
            className="bg-cover w-[95%] sm:w-96 rounded-2xl max-w-lg h-64 bg-center "
            style={{
              backgroundImage: `url(${ss5})`,
            }}
          >
            <div className="w-full relative h-full  bg-black bg-opacity-50">
              <div className="p-2 absolute left-4 top-4 rounded-md bg-white text-black w-fit">
                <a
                  href="https://github.com/yairdorantes/WeatherApp"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="absolute text-sm py-1 px-2 bg-black bg-opacity-60  border rounded-full  bottom-2 left-2 ">
                App del clima
              </div>
            </div>
          </div> */}
          {/* <div
            className="bg-cover w-[95%] sm:w-96 rounded-2xl max-w-lg h-64 bg-center "
            style={{
              backgroundImage: `url(${ss8})`,
            }}
          >
            <div className="w-full relative h-full  bg-black bg-opacity-50">
              <div className="p-2 absolute left-4 top-4 rounded-md bg-white text-black w-fit">
                <a
                  href="https://github.com/yairdorantes/Trivia"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="absolute text-sm py-1 px-2 bg-black bg-opacity-60  border rounded-full  bottom-2 left-2 ">
                Juego Trivia
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <video controls src={soyeon}></video> */}
    </section>
  );
};

export default Portfolio;
