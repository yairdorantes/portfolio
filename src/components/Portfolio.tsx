import { IoMdLock } from "react-icons/io";
import { MdWorkspaces } from "react-icons/md";
import ffss from "../media/ss.png";
const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-black  text-white p-4">
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
                PWA para fulfillment ecooncerce
              </div>
            </div>
          </div>

          <div
            className="bg-cover min-w-96 rounded-2xl max-w-lg h-64 bg-center "
            style={{
              backgroundImage: `url(${ffss})`,
            }}
          >
            <div className="w-full relative h-full  bg-black bg-opacity-40">
              <div className="p-2 absolute left-4 top-4 rounded-md bg-white text-black w-fit">
                <IoMdLock />
              </div>
              <div className="absolute bottom-2 left-2 ">
                Sistema de invitaciones mediante whastapp
              </div>
            </div>
          </div>

          <div
            className="bg-cover min-w-96 rounded-2xl max-w-lg h-64 bg-center "
            style={{
              backgroundImage: `url(${ffss})`,
            }}
          >
            <div className="w-full relative h-full  bg-black bg-opacity-40">
              <div className="p-2 absolute left-4 top-4 rounded-md bg-white text-black w-fit">
                <IoMdLock />
              </div>
              <div className="absolute bottom-2 left-2 ">
                PWA para fulfillment ecooncerce
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
