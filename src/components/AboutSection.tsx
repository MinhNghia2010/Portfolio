import { Briefcase, Code, User } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

function AboutSection() {
    return (
        <RevealOnScroll>
            <section id="about" className="py-32 px-4 relative min-h-dvh">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        About <span className="text-primary">Me</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold">IT Student</h3>

                            <p className="text-muted-foreground">
                                Passionate about building excellent software that improves the lives of those around me.
                            </p>

                            <p className="text-muted-foreground">
                                I have a passion for designing and developing user-friendly websites and applications. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
                            </p>
                                

                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                                <a href="#contact" className="cosmic-button">Get In Touch</a>
                                <a href="" className="px-6 py-2 rounded-full text-primary border-3 border-primary hover:bg-primary/10">Download CV</a>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="gradient-border card-hover p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Code className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-lg font-semibold">Web Development</h4>
                                        <p className="text-muted-foreground">Writing maintainable and efficient code following best practices.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border card-hover p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                        <User className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-lg font-semibold">UI/UX Design</h4>
                                        <p className="text-muted-foreground">Creating intuitive and engaging user interfaces.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border card-hover p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Briefcase className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-lg font-semibold">Professional</h4>
                                        <p className="text-muted-foreground">None 😁. I'm still a student.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
}

export default AboutSection;