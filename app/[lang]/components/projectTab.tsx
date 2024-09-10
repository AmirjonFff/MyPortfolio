"use client"
import React, { useRef } from 'react'
import { useInView, motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { IProjectsLang } from './IComponents';
interface IProjectTab {
    data: {
        id: number,
        title: string,
        description: string,
        image: any,
        tag: string[],
        gitUrl: string,
        previewUrl: string,
    }[],
    lang: IProjectsLang;
}

function ProjectTab({ data, lang }: IProjectTab) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 mt-4">
                {data.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            more={lang.more}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectTab
