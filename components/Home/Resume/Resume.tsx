import { FaReact } from "react-icons/fa";
import ResumeCard from "./ResumeCard";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <section id="resume" className="pt-20 pb-16 scroll-mt-[12vh]">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-200">Experience</span>
          </h1>

          <div
            className="mt-10"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <ResumeCard
              Icon={FaReact}
              role="Front-End Developer"
              description="Built and delivered modern web applications from wireframes to production. Worked extensively with Next.js, React, and Node.js, leveraging TypeScript, Tailwind CSS, Redux, Vite, and REST APIs to create scalable, high-performance user interfaces."
            />
          </div>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Education</span>
          </h1>

          <div
            className="mt-10"
            data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <ResumeCard
              Icon={BiBadge}
              role="B.Sc. Computer Science and Engineering"
              date="2019 - 2025"
              description="Completed my B.Sc. Computer Science and Engineering from AMERICAN INTERNATIONAL UNIVERSITY- BANGLADESH with a CGPA of 3.89/4.0"
            />

            <ResumeCard
              Icon={BiBadge}
              role="HIGHER SECONDARY SCHOOL CERTIFICATE"
              date="2017 - 2019"
              description="Completed my Higher Secondary School Certificate from Mothijheel Model School and College with a GPA of 4.55/5.00"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
