"use client";

import { useState, useEffect } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";
import { groq } from "next-sanity";

const PersonalProjects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            const query = groq`*[_type == "personalProject"] | order(num asc)`;
            const data = await client.fetch(query);
            setProjects(data);
            setIsLoading(false);
        };

        fetchProjects();
    }, []);

    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                {isLoading ? (
                    <div className="text-white text-center">Loading projects...</div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                    >
                        {projects.map((project, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex-1 flex flex-col justify-center gap-6 group bg-[#2d2f42] p-6 xl:p-8 rounded-xl"
                                >
                                    {/* image preview box */}
                                    <div className="relative w-full h-[250px] bg-primary rounded-xl overflow-hidden flex justify-center items-center group-hover:shadow-lg transition-all duration-500">
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        {project.image ? (
                                            <Image
                                                src={urlForImage(project.image).url()}
                                                fill
                                                unoptimized={true}
                                                className="object-cover transition-all duration-500 group-hover:scale-105"
                                                alt={project.title}
                                            />
                                        ) : (
                                            <div className="text-white/40 font-bold text-xl relative z-20">
                                                Preview Image Here
                                            </div>
                                        )}
                                    </div>

                                    {/* top */}
                                    <div className="w-full flex justify-between items-center mt-2">
                                        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                            {project.num}
                                        </div>
                                        {project.itchLink && (
                                            <Link
                                                href={project.itchLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                            >
                                                <BsArrowDownRight className="text-primary text-3xl" />
                                            </Link>
                                        )}
                                    </div>
                                    {/* title */}
                                    <h2 className="text-[38px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                        {project.title}
                                    </h2>
                                    {/* description */}
                                    <p className="text-white/60">
                                        {project.description}
                                    </p>
                                    {/* stack */}
                                    <ul className="flex flex-wrap gap-2">
                                        {project.stack && project.stack.map((item, idx) => (
                                            <li key={idx} className="text-accent text-sm md:text-base bg-white/5 px-3 py-1 rounded-md">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    {/* border */}
                                    <div className="border-b border-white/20 w-full mt-2"></div>
                                </div>
                            );
                        })}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default PersonalProjects;
