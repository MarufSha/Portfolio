import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="pt-16 pb-16 scroll-mt-[12vh]">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />{" "}
        <span className="text-cyan-300">projects</span>
      </h1>

      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        <Link
          href="https://prescription-app-lyart.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <Image
              src="/images/Project 1.png"
              alt="img"
              width={800}
              height={650}
              className="rounded-lg"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            />
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
              Prescription Making Application
            </h1>

            <h1 className="pt-2 font-medium text-white/80">Apps , UI/UX</h1>
          </div>
        </Link>
        <Link
          href="https://trade-app-opal.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <Image
              src="/images/Project 2.png"
              alt="img"
              width={800}
              height={650}
              className="rounded-lg"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay="100"
            />
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
              Modern Finance Dashboard UI
            </h1>

            <h1 className="pt-2 font-medium text-white/80">
              Apps , UI/UX, Figma
            </h1>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
