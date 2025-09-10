import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

const projects = [
    {
        id: 1,
        title: "Markdown App Note",
        description: "An app using ReactTS and Bootstrap",
        image: "/public/projects/Project 1.png",
        tags: ["React", "Bootstrap", "App"],
        demoURL: "https://markdown-note-omega.vercel.app/",
        githubURL: "https://github.com/MinhNghia2010/Markdown-Note",
    },
    {
        id: 2,
        title: "Web Design",
        description: "A booking page web design",
        image: "/public/projects/Project 2.png",
        tags: ["HTML", "CSS", "Bootstrap"],
        demoURL: "https://bootstrap-blog-template.vercel.app/",
        githubURL: "https://github.com/MinhNghia2010/bootstrap-blog-template",
    },
    {
        id: 3,
        title: "Todo App",
        description: "A todo app",
        image: "/public/projects/Project 3.png",
        tags: ["HTML", "CSS", "Javascript"],
        demoURL: "https://todo-app-five-tan.vercel.app/",
        githubURL: "https://github.com/MinhNghia2010/todo-app",
    },

]

function ProjectSection() {
    return (
        <RevealOnScroll>
        <section id="projects" className="py-24 px-4 relative min-h-dvh">
            <div className="container max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl mb-4 text-center font-bold">Featured <span className="text-primary">Projects</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my projects that showcase my skills and experience. Each project includes a brief description, the technologies used, and links to the live demo and source code.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className={`group bg-card rounded-lg overflow-hidden shadow-xs card-hover`}>
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="px-6 pt-6 pb-2">
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tags.map((tag) => 
                                        <span key={tag} className="text-sm bg-secondary text-foreground px-3 py-1 rounded-full">{tag}</span>)}
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-4 mb-4 ml-4">
                                    <a href={project.demoURL} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.githubURL} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20} />
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/MinhNghia2010" target="_blank" className="cosmic-button w-fit flex items-center gap-1 mx-auto">
                        View All Projects <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
        </RevealOnScroll>
    );
}

export default ProjectSection;