"use client";
import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";

const SkillSet = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  { name: "React Js", icon: <SiReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
];
const Skills = () => {
  return (
    <section id="skills" className="text-white pt-12 pb-16 scroll-mt-[12vh]">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My <span className="text-cyan-300">Skills</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {SkillSet.map((skill, i) => {
          return (
            <Tilt key={skill.name} scale={2} transitionSpeed={400}>
              <div
                data-aos="flip-right"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay={i * 100}
                className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105"
              >
                <div className="text-5xl mb-4 text-cyan-300">{skill.icon}</div>

                <p className="text-purple-400 mt-1">{skill.name}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </section>
  );
};
export default Skills;
