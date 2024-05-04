import { FaPython } from "react-icons/fa";
import react from "../media/tech-icons/react.svg";
import html from "../media/tech-icons/html.png";
import css from "../media/tech-icons/css.png";
import tailwind from "../media/tech-icons/tailwind.svg";
import python from "../media/tech-icons/python.svg";
import js from "../media/tech-icons/js.png";
import nodejs from "../media/tech-icons/node.svg";
import django from "../media/tech-icons/django.svg";
import linux from "../media/tech-icons/linux.png";
import git from "../media/tech-icons/git.svg";
import sql from "../media/tech-icons/sql.png";
import express from "../media/tech-icons/ex.svg";
import mysql from "../media/tech-icons/database.png";
import { MdWorkspaces } from "react-icons/md";
const Skills = () => {
  const skills = [
    {
      name: "HTML",
      img: html,
    },
    {
      name: "CSS",
      img: css,
    },
    {
      name: "Tailwind",
      img: tailwind,
    },
    {
      name: "JavaScript",
      img: js,
    },
    {
      name: "React",
      img: react,
    },
    {
      name: "Node.js",
      img: nodejs,
    },
    {
      name: "Express.js",
      img: express,
    },
    {
      name: "Python",
      img: python,
    },
    {
      name: "Django",
      img: django,
    },
    {
      name: "Linux",
      img: linux,
    },
    {
      name: "Git",
      img: git,
    },
    {
      name: "SQL",
      img: sql,
    },
    {
      name: "MySQL",
      img: mysql,
    },
  ];
  return (
    <section className="bg-black  text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="w-fit flex gap-2 items-center  mb-10 text-sm p-2 border border-gray-600 border-opacity-80 rounded-full">
          <MdWorkspaces /> Habilidades
        </div>
        <div className="text-3xl mb-10">
          Mis <span className="text-green-500">Habilidades</span>
        </div>
        <div className="flex  gap-7 flex-wrap justify-center">
          {skills.map((skill, i) => (
            <div className="text-center space-y-2 mb-7">
              <div className="w-28 h-28 flex justify-center items-center rounded-3xl border-2 border-gray-500">
                <img className="w-16" src={skill.img} alt="" />
              </div>
              <div>{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
