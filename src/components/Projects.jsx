import { PROJECTS } from "../constants";
import { motion } from "motion/react";


const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Some of my Projects
            </motion.h2>
            <div>
                {
                    PROJECTS.map((project, index) => (
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                            <motion.div 
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: -100 }}
                                transition={{ duration: 1 }}
                                className="w-full lg:w-1/4"
                            >
                                <a href={project.git ? project.gitLink : project.siteLink} target="_blank">
                                    <img 
                                        src={project.image} 
                                        width={350} 
                                        height={250} 
                                        alt={project.title} 
                                        className="mb-6 rounded transition-transform duration-300 lg:hover:scale-150"
                                    />
                                </a>
                            </motion.div>
                            <motion.div 
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 100 }}
                                transition={{ duration: 1 }}
                                className="w-full max-w-xl lg:w-3/4"
                            >
                                <h6 className="mb-2 font-semibold">
                                    {
                                        project.git ? 
                                        (
                                            <a href={project.gitLink} target="_blank">
                                                {project.title}
                                            </a>
                                        ) : (
                                            <a href={project.siteLink} target="_blank">
                                                {project.title}
                                            </a>
                                        )
                                    }
                                </h6>
                                <p className="mb-4 text-neutral-400">{project.description}</p>
                                {
                                    project.git && 
                                    <div className="flex gap-2 mt-4 mb-3 items-end justify-start">
                                        <a href={project.gitLink} target="_blank" className="text-primary">
                                            <button className="inline-flex gap-2 items-center px-3 py-1 border-1 border-primary-container border rounded-md font-semibold text-xs text-primary-100 uppercase tracking-wide hover:bg-primary-600/40 active:bg-primary-800/80 focus:outline-none transition ease-in-out duration-150">
                                                <img src="https://skillicons.dev/icons?i=github" alt="github" width={20} />
                                                Github
                                            </button>
                                        </a>
                                    </div>
                                }
                                {
                                    project.technologies.map((tech, index) => (
                                        <span key={index} className="me-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                                            {tech}
                                        </span>
                                    ))
                                }
                            </motion.div>
                        </div>
                    ))
                }
            </div>

            <div className="mb-8 flex flex-wrap lg:justify-center">
                <a href="javascript:void(0)">
                    <button
                        className="inline-flex gap-2 items-center justify-center py-1 px-3 rounded-md font-semibold text-lg text-primary-100 uppercase tracking-wide active:bg-primary-800/80 focus:outline-none transition ease-in-out duration-100 undefined group"
                    >
                        View All Projects
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                            stroke-linecap="round" stroke-linejoin="round" className="transition-all group-hover:translate-x-1"
                            height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Projects;