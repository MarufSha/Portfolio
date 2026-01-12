import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="services" className="pt-16 pb-16 scroll-mt-[12vh]">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Working with people and ideas <br />
        to build meaningful digital <br />
        experiences
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <ServiceCard
            icon="/images/Interface & Experience.png"
            name="Interface & Experience Design"
            description="Creating thoughtful layouts and user flows that prioritize clarity, consistency, and ease of use across digital products."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="50"
        >
          <ServiceCard
            icon="/images/Responsive Web.png"
            name="Responsive Web Solutions"
            description="Developing adaptable web experiences that perform seamlessly on desktops, tablets, and mobile screens."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <ServiceCard
            icon="/images/Visual Identity & Interaction.png"
            name="Visual Identity & Interaction"
            description="Designing visual systems and interactions that communicate purpose, strengthen branding, and guide users."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <ServiceCard
            icon="/images/Modern Front-End.png"
            name="Modern Front-End Engineering"
            description="Building fast, scalable interfaces using modern frameworks, clean architecture, and performance-driven techniques."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
