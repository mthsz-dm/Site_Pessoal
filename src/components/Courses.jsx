import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,

} from "react-icons/si";
import { FaJava, FaAws  } from "react-icons/fa";
import { IoGameController, IoCalculatorSharp } from "react-icons/io5";
import { TbSortAscendingLetters } from "react-icons/tb";

const courses = [
  { id: 1, name: "Desenvolvimento de Games", level: 20, Icon: IoGameController, type: "Danki Code" },
  { id: 2, name: "Unreal Engine", level: 100, Icon: IoGameController, type: "EBAC" },
  { id: 3, name: "Cálculo", level: 75, Icon: IoCalculatorSharp, type: "Udemy" },
  { id: 4, name: "Java Completo", level: 27, Icon: FaJava, type: "Udemy" },
  { id: 5, name: "AWS Educate", level: 5, Icon: FaAws, type: "AWS Educate" },
  { id: 6, name: "Ingles", level: 80, Icon: TbSortAscendingLetters, type: "CCAA" },
  { id: 7, name: "Espanhol", level: 10, Icon: TbSortAscendingLetters, type: "Duolingo" },
].map((s) => ({
  ...s,
  nivel: s.level >= 100 ? "Finalizado" : s.level >= 50 ? "Intermediario" : "Iniciante",
}));


export default function Courses() {
  return (
    <div className="courses-page">
      <div className="courses-container">
        <header className="courses-header">
          <h1>Cursos Feitos</h1>
        </header>

        <main className="courses-grid">
          {courses.map((s) => (
            <article key={s.id} className="course-card">
              <div className="course-icon">
                <s.Icon />
              </div>

              <div className="course-info">
                <div className="course-header">
                  <h2>{s.name}</h2>
                  <span>{s.level}%</span>
                </div>

                <div className="course-bar-bg">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${s.level}%` }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="course-bar"
                  />
                </div>

                <div className="course-tags">
                  <span>{s.type}</span>
                  <span>{s.nivel}</span>
                </div>

              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}