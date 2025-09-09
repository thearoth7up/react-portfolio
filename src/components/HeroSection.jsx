// import { ArrowDown, IdCardLanyard } from "lucide-react";
import CircularText from "./CircularText";
import TextType from "./TextType ";
import { motion } from "framer-motion";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import LogoLoop from "./LogoLoop ";
import Lanyard from "./Lanyard";

const techLogo = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10 flex flex-col md:flex-row items-center md:items-start">
        {/* Profile image on the left */}
        <motion.div
          initial={{ opacity: 0, translateX: "-100%"}}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          className=" flex-shrink-0 mb-8 md:mb-20 md:ml-11 flex justify-center w-full md:w-auto"
        >
          <img
            className=" w-50 h-50 md:w-70 md:h-70 mt-10 rounded-full opacity-0 animate-fade-in"
            src="/profile/photo.png"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-70 h-70 md:w-90 md:h-90"
        >
          <CircularText
            text="I'm Thearoth Web Developer just for fun"
            onHover="speedUp"
            spinDuration={50}
            className=" w-full h-full custom-class"
          />
        </motion.div>
        {/* Text content on the right */}
        <motion.div
          initial={{ opacity: 0, translateX:"100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left space-y-6 sm:ml-15 md:ml-20 lg:ml-32"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in "> Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Thearoth{" "}
            </span>
            <div>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 ">
                {" "}
                <TextType
                  text={[
                    "Welcome to my website",
                    "I'm a web developer",
                    "I'm a UX/UI designer",
                  ]}
                  typingSpeed={100}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="_"
                />
              </span>
            </div>
          </h1>

          <motion.div
            initial={{ opacity: 0, translateX:"100%"}}
            whileInView={{ opacity: 1,translateX: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              I'm a Information Technology Engineering{" "}
              <span className="text-primary font-bold">" ITE "</span> student at{" "}
              <span className="text-primary font-bold">RUPP.</span> Let's build
              something great together!
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="pt-5 "
            >
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div
        style={{ height: "200px", position: "absolute", overflow: "hidden" }}
        className="abosolute top-200 w-full"
      >
        <LogoLoop
          logos={techLogo}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          // fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
      
    </section>
  );
};
