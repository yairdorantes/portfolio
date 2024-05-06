import { IoMdLock } from "react-icons/io";
import { MdPublic, MdWorkspaces } from "react-icons/md";
import ffss from "../media/ss.png";
import ss2 from "../media/ss2.png";
import ss3 from "../media/ss3.png";
import ss4 from "../media/ss4.avif";
import { FaGithub } from "react-icons/fa";
const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-black pb-10  text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="w-fit flex gap-2 items-center  mb-10 text-sm p-2 border border-gray-600 border-opacity-80 rounded-full">
          <MdWorkspaces /> Portafolio
        </div>
        <div className="text-3xl mb-10">
          <span className="text-green-500">Portafolio</span>
        </div>

        <div className="flex flex-wrap gap-5 w-full justify-center">
          <div
            className="bg-cover rounded-2xl min-w-96 max-w-lg h-64 bg-center "
            style={{
              backgroundImage: `url(${ffss})`,
            }}
          >
            <div className="w-full  relative h-full backdrop-blur-md bg-black bg-opacity-40">
              <div className="p-2 absolute left-4 top-4 rounded-md bg-white text-black w-fit">
                <IoMdLock />
              </div>
              <div className="absolute bottom-2 left-2 ">
                PWA Fulfillment ecommerce
              </div>
            </div>
          </div>

          <div
            className="bg-cover min-w-96 rounded-2xl max-w-lg h-64 bg-center "
            style={{
              backgroundImage: `url(${ss2})`,
            }}
          >
            <div className="w-full backdrop-blur-md relative h-full  bg-black bg-opacity-40">
              <div className="p-2 absolute left-4 top-4 rounded-md bg-white text-black w-fit">
                <IoMdLock />
              </div>
              <div className="absolute bottom-2 left-2 ">
                Sistema de invitaciones con integracion de WhatsApp
              </div>
            </div>
          </div>

          <div
            className="bg-cover min-w-96 rounded-2xl max-w-lg h-64 bg-center "
            style={{
              backgroundImage: `url(${ss3})`,
            }}
          >
            <div className="w-full relative h-full  bg-black bg-opacity-40">
              <div className="p-2 absolute left-4 top-4 rounded-md bg-white text-black w-fit">
                <a
                  href="https://github.com/yairdorantes/EnglishApp"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="absolute bottom-2 left-2 ">
                App para aprendizaje de Ingles
              </div>
            </div>
          </div>
          <div
            className="bg-cover min-w-96 rounded-2xl max-w-lg h-64 bg-center "
            style={{
              backgroundImage: `url(${ss4})`,
            }}
          >
            <div className="w-full relative h-full  bg-black bg-opacity-60">
              <div className="p-2 absolute left-4 top-4 rounded-md bg-white text-black w-fit">
                <a href="https://github.com/yairdorantes/Facts" target="_blank">
                  <FaGithub />
                </a>
              </div>
              <div className="absolute bottom-2 left-2 ">
                App de Datos curiosos
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <video controls src={soyeon}></video> */}
    </section>
  );
};

export default Portfolio;
