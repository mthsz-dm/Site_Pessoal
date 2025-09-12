// Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,

} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  { id: 1, name: "JavaScript", level: 40, Icon: SiJavascript, type: "Front-end" },
  { id: 2, name: "React", level: 40, Icon: SiReact, type: "Front-end" },
  { id: 3, name: "Java", level: 60, Icon: FaJava, type: "Back-end" },
  //{ id: 4, name: "Node.js", level: 20, Icon: SiNodedotjs, type: "Back-end" },
].map((s) => ({
  ...s,
  nivel: s.level >= 80 ? "Avançado" : s.level >= 50 ? "Intermediário" : "Básico",
}));


export default function Skills() {
  return (
    <div className="skills-page">
      <div className="skills-container">
        <header className="skills-header">
          <h1>Minhas Habilidades</h1>
        </header>

        <main className="skills-grid">
          {skills.map((s) => (
            <article key={s.id} className="skill-card">
              <div className="skill-icon">
                <s.Icon />
              </div>

              <div className="skill-info">
                <div className="skill-header">
                  <h2>{s.name}</h2>
                  <span>{s.level}%</span>
                </div>

                <div className="skill-bar-bg">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${s.level}%` }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="skill-bar"
                  />
                </div>

                <div className="skill-tags">
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