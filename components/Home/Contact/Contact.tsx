import Link from "next/link";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="pt-16 pb-16 scroll-mt-[12vh]">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Contact Information
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out anytime to explore how I can help you move closer to your
            goals.
          </p>

          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-4">
              <BiPhone className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                +880 1535 829 702
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                niloy9896@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
          <div className="flex items-center mt-16 space-x-3">
            <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300">
              <Link
                href="https://github.com/MarufSha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-white w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <form
          action="https://formspree.io/f/meeeqgae"
          method="POST"
          className="md:p-10 p-5 bg-[#131332] rounded-lg"
        >
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />

          <input
            name="phone"
            type="text"
            placeholder="Mobile Number"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]"
          />
          <button
            type="submit"
            className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
