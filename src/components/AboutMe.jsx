import { Briefcase, Code, User } from "lucide-react";
import ChromaGrid from "./ChromaGrid";
import DomeGallery from "./DomeGallery";
import { motion } from "framer-motion";
export const AboutMe = () => {
  const items = [
    {
      image: "/certificate/MIS Challenge Champion.png",
      title:
        "Champion Team Member made a UX/UI Design for a web application for buying and selling books.",
      // subtitle: "Frontend Developer",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
    },
    {
      image: "/certificate/Oum Kunthearoth.png",
      title: "Certificate of Completion with Paragon and MSI",
      // subtitle: "Backend Engineer",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
    },
    {
      image: "/certificate/certificate1.png",
      title: "ETCH Center",
      subtitle: "Basic, Advance C++, OOP, Algorithm & MySQL Database",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg,#F59E0B,#000)",
    },
    {
      image: "/certificate/certificate2.png",
      title: "ETCH Center",
      subtitle: "Basic Computer, Network & Installation",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg,#EF4444,#000)",
    },
    {
      image: "/certificate/certificate3.png",
      title: "ISTED",
      subtitle: "WEB DESIGN JUNIOR",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg,#8B5CF6,#000)",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, translateX: "-100%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold ">Who I Am</h3>
            <p className="text-muted-foreground">
              I'm a student studying at Royal University of Phnom Penh (RUPP).
              I'm a freshman majoring in Information Technology Engineering
              (ITE) student.
            </p>

            <p className="text-muted-foreground">
              Nowaday, I'm learning about web development. I have a knowledge of
              HTML, CSS, reactjs and tailwind .I am going to develop my skills
              in web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 ">
            <motion.div
              initial={{ opacity: 0, translateX: "100%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5 }}
              className="gradient-border p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Front-End Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building responsive and accessible user interfaces.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: "100%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5 }}
              className="gradient-border p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UX/UI Design</h4>
                  <p className="text-muted-foreground">
                    Creating intuitive and engaging user experiences.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: "100%" }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5 }}
              className="gradient-border p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Overseeing projects from conception to completion.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl mt-15">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Certificate</span>
        </h2>
        <div>
          <ChromaGrid
            items={items}
            radius={700}
            damping={1}
            fadeOut={1}
            ease="power3.out"
            className="absolute"
          />
        </div>
      </div>

      {/* my gallery */}
      <div className="container mx-auto max-w-8xl mt-30 hidden sm:block ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Gallery</span>
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ width: "97.5vw", height: "70vh" }}
        className="relative min-h-screen items-center justify-center px-4 hidden sm:flex"
      >
        <DomeGallery />
      </motion.div>
    </section>
  );
};
