import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { name: "React", desc: "" },
  { name: "Java", desc: "" },
  { name: "Mysql", desc: "" },
  { name: "C#", desc: "" },
  { name: "Git/GitHub", desc: "" },
];

export default function Skills() {
  const [rotations, setRotations] = useState({});

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;

    const leftZone = width * 0.4;
    const rightZone = width * 0.6;

    let rotation = 0;
    if (x < leftZone) {
      rotation = -8;
    } else if (x > rightZone) {
      rotation = 8;
    } else {
      rotation = 0;
    }

    setRotations((prev) => ({
      ...prev,
      [index]: rotation,
    }));
  };

  const handleMouseLeave = (index) => {
    setRotations((prev) => ({
      ...prev,
      [index]: 0,
    }));
  };

  return (
    <div className="skills-container">
      <h1 className="skills-title">⚡ Minhas Habilidades</h1>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="skill-card"
            animate={{ rotate: rotations[i] || 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            onMouseMove={(e) => handleMouseMove(e, i)}
            onMouseLeave={() => handleMouseLeave(i)}
          >
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
