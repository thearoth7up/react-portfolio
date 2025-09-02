import { ArrowDown } from "lucide-react";
import Lanyard from "../components/Lanyard";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4"
    >
      <div className="container max-w-5xl mx-auto z-10 flex flex-col md:flex-row items-center md:items-start">
        {/* Profile image on the left */}
        <div className=" flex-shrink-0 mb-8 md:mb-0 md:mr-12 flex justify-center w-full md:w-auto">
          <img
            className=" w-50 h-50 md:w-80 md:h-80 rounded-full opacity-0 animate-fade-in"
            src="/profile/photo.png"
            alt=""
          />
        </div>
        {/* Text content on the right */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in "> Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Thearoth{" "}
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 ">
              {" "}
              Web Developer{" "}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a Information Technology Engineering{" "}
            <span className="text-primary font-bold">" ITE "</span> student at{" "}
            <span className="text-primary font-bold">RUPP.</span> Let's build
            something great together!
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4 ">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
        {/* Lanyard on the right side */}
          {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}
        
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
