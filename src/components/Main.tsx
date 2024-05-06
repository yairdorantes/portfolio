import { useEffect } from "react";
import video from "../media/video2.mp4";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSheetPlastic } from "react-icons/fa6";
import pdf from "../media/cvYair.pdf";

const time = 1200;
const Main = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <header
      id="home"
      className="relative flex items-center justify-center h-screen  overflow-hidden"
    >
      <div className="w-full h-full z-20 bg-opacity-40  absolute top-0 bg-black "></div>
      <div className="p-4 z-30 absolute top-[20%]">
        <div className=" text-white  font-semibold text-5xl">
          Hola, soy <span className="text-cyan-400">Yair Dorantes</span>
        </div>
        <div className="text-gray-100 text-lg font-semibold">
          Desarrolador de Web Fullstack
        </div>
        <div className="text-emerald-400 font-semibold">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "HTML/CSS",
              time, // wait 1s before replacing "Mice" with "Hamsters"
              "Tailwind",
              time,
              "Javascript",
              time,
              "React",
              time,
              "Node.js",
              time,
              "Express.js",
              time,
              "Python",
              time,
              "Django",
              time,
              "Linux",
              time,
              "Git",
              time,
              "SQL",
              time,
              "MySQL",
              time,
              "API Restful",
              time,
              "JWT",
              time,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1.5em", display: "inline-block" }}
            repeat={Infinity}
          />
          {/* <span className="blinking">|</span> */}
        </div>
        <div className="text-slate-100 flex justify-center gap-4 mt-4">
          <a
            className="group"
            href="https://www.linkedin.com/in/yair-dorantes-25a74a1a8/"
            target="_blank"
          >
            <div className="p-3 group-hover:border-emerald-400 group-hover:text-emerald-400 rounded-full border-2 border-slate-200 border-opacity-80 w-fit">
              <FaLinkedin size={25} color="" className="" />
            </div>
          </a>
          <a
            className="group"
            href="https://github.com/yairdorantes"
            target="_blank"
          >
            <div className="p-3 group-hover:border-emerald-400 group-hover:text-emerald-400 rounded-full border-2 border-slate-200 border-opacity-80 w-fit">
              <FaGithub size={25} color="" className="" />
            </div>
          </a>
          <a className="group" href={pdf} target="_blank">
            <div className="p-3 group-hover:border-emerald-400 group-hover:text-emerald-400 rounded-full border-2 border-slate-200 border-opacity-80 w-fit">
              <FaSheetPlastic size={25} color="" className="" />
            </div>
          </a>
        </div>
      </div>
      <video
        ref={videoRef}
        // autoplay
        muted
        loop
        src={video}
        className="absolute z-10 w-auto min-w-full min-h-full  max-w-none"
      ></video>
    </header>
  );
};

export default Main;
