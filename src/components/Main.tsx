import { useEffect, useState } from "react";
import video from "../media/video.mp4";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
const skills = ["Python", "Linux", "Javascript"];
const time = 1200;
const Main = () => {
  const [index, setIndex] = useState(0);
  const [skillName, setSkillName] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <header className="relative flex items-center justify-center h-screen  overflow-hidden">
      <div className="w-full h-full z-20 bg-opacity-40  absolute top-0 bg-black "></div>
      <div className="p-4 z-30">
        <div className="text-white  font-semibold text-4xl">
          Hola, soy <span>Yair Dorantes</span>
        </div>
        <div className="text-white">Desarrolador de Software</div>
        <div className="text-teal-400">
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
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          {/* <span className="blinking">|</span> */}
        </div>
      </div>
      <video
        ref={videoRef}
        // autoplay
        muted
        loop
        controls
        src={video}
        className="absolute z-10 w-auto min-w-full min-h-full  max-w-none"
      ></video>
    </header>
  );
};

export default Main;
