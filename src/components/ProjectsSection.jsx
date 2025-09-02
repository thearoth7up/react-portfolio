import { ArrowRight, ExternalLink, Github, GithubIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "TECH - SEVEN",
    description: "A web application for buying technology products.",
    image: "public/projects/project2.png",
    tags: ["React", "TailwindCSS", "JavaScript"],
    demoUrl: "https://github.com/danadorn/tech-seven",
    githubUrl: "https://github.com/danadorn/tech-seven",
  },
  {
    id: 2,
    title: "BOOK - HAVEN",
    description:
      "A web application for buying and selling books. It is a platform that connects readers and sellers.",
    image: "public/projects/project1.png",
    tags: ["UX/UI"],
    demoUrl:
      "https://www.figma.com/proto/9nvkRwjkiqE0xZNzVc8pTJ/Book-Haven?node-id=163-1274&t=VLptzCFUj9hDP3e0-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=19%3A139",
    githubUrl:
      "https://github.com/thearoth7up",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured{" "}
          <span className="text-primary md:text-4xl font-bold mb-4 text-center">
            {" "}
            Projects{" "}
          </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Click on the project titles to
          learn more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>

              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 bg-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/thearoth7up"
            className="cosmic-button w-fit flex items-center mx-auto gap-2 "
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
