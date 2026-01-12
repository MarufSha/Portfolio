"use client";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col"
    >
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/PFP.png"
          alt="heroimage"
          width={170}
          height={170}
          className="rounded-full border-8 border-[#0c0c48aa]"
          data-aos="fade-up"
        />

        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide"
        >
          Building modern <br /> scalable{" "}
          <span className="text-cyan-200">web applications</span>
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center"
        >
          Hi! I&apos;m Maruf - A Passionate
          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: [
                  " Frontend Developer",
                  " Backend Developer",
                  " Web Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
        <a
          href="#projects"
          className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium inline-flex items-center"
        >
          <span>View My Projects</span>
          <BsArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </section>
  );
};
export default Hero;
