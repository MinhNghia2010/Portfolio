import { useState } from "react";
import { cn } from "../lib/utils";
import { RevealOnScroll } from "./RevealOnScroll";

const skills = [
    //Frontend
    { name: 'JavaScript', level: 80, category: 'Frontend' },
    { name: 'React', level: 75, category: 'Frontend' },
    { name: 'TypeScript', level: 70, category: 'Frontend' },
    { name: 'CSS', level: 95, category: 'Frontend' },
    { name: 'HTML', level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 70, category: 'Frontend' },
    { name: 'Bootstrap', level: 75, category: 'Frontend' },

    //Backend
    { name: 'SQL', level: 60, category: 'Backend' },

    //Tools
    { name: 'Git/Github', level: 50, category: 'Tools' },
    { name: 'VS Code', level: 60, category: 'Tools' },
    { name: 'Figma', level: 70, category: 'Tools' }
]

const categories = ['All', 'Frontend', 'Backend', 'Tools'];



function SkillsSection() {

    const[activeCategory, setActiveCategory] = useState("All")
    const filterdSkills = skills.filter(
        (skill) => activeCategory === "All" || skill.category === activeCategory
    );

    return(
        <RevealOnScroll>
        <section id="skills" className="py-24 px-4 relative min-h-dvh">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, index) => (
                        <button key={index} className={cn("px-5 py-2 rounded-full hover:scale-105 transition-colors duration-300", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")}
                        onClick={() => setActiveCategory(category)}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filterdSkills.map((skill, index) => (
                        <RevealOnScroll>
                        <div key={index} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="text-lg font-semibold">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                                <div className="bg-primary rounded-full h-2 animate-[grow_1.5s_ease-out]" style={{ width: skill.level + "%" }}></div>
                            </div>
                            <div className="text-right mt-1 text-sm text-muted-foreground">
                                <span>{skill.level}%</span>
                            </div>
                        </div>
                        </RevealOnScroll>
                    ))}

                </div>
            </div>
        </section>
        </RevealOnScroll>
    );
}

export default SkillsSection;