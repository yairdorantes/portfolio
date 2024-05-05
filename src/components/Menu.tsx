import { useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";
import { FaBriefcase, FaHome, FaUserTie } from "react-icons/fa";
import { GrInfo } from "react-icons/gr";
import { BiSolidBrain } from "react-icons/bi";
import { MdConnectWithoutContact, MdLabel } from "react-icons/md";
import mx from "../media/mx.png";
const Menu = () => {
  const [isOpen, setisOpen] = useState(true);
  return (
    <>
      <div
        className="z-50 fixed top-5 right-5 bg-black text-white border rounded-full"
        onClick={() => setisOpen(!isOpen)}
      >
        <Hamburger toggled={isOpen} size={25} />
      </div>
      {isOpen && (
        <div
          onClick={() => setisOpen(false)}
          className="fixed bg-black text-white bg-opacity-60  top-0 z-40 w-screen h-screen "
        />
      )}
      <ul
        className={`fixed w-16 flex  flex-col justify-center overflow-y-hidden  items-center  space-y-7 top-36 right-5 z-50 transition-all duration-500 ${
          isOpen ? "h-80 " : "h-0 border-opacity-0 "
        }   border text-white bg-black border-white rounded-full`}
      >
        <li className="relative">
          <span className="absolute z-50 -left-24 bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            Default
          </span>
          <a
            href="#home"
            className="relative hover:text-emerald-300 transition-all"
          >
            <FaHome size={25} />
          </a>
        </li>
        <li>
          <a className="hover:text-emerald-300 transition-all" href="#skills">
            <BiSolidBrain size={25} />
          </a>
        </li>
        <li>
          <a className="hover:text-emerald-300 transition-all" href="#exp">
            <FaUserTie size={25} />
          </a>
        </li>
        <li>
          <a
            className="hover:text-emerald-300 transition-all"
            href="#portfolio"
          >
            <FaBriefcase size={25} />
          </a>
        </li>
        <li>
          <MdConnectWithoutContact size={25} />
        </li>
        <li>
          <img src={mx} className="w-7" alt="" />
        </li>
      </ul>
    </>
  );
};

export default Menu;
