"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "VR Development",
        title: "Gamelan Land",
        description: "A multiplayer VR game for learning and playing Gamelan (traditional Javanese music) instruments like Demung, Saron, and Gong with friends anytime, anywhere. Developed by CSAC Lab Udinus, where I was the main programmer.",
        stack: [{ name: "C#"}, {name: "Unity"}, {name: "Photon"}],
        image: "",
        video: "https://drive.google.com/file/d/1D8oqRJncynmLumSr2Se6prg-dFRzdr8b/preview",
        live: "",
        github: "https://github.com/SyafiraRosa/GamelanLand",
    },
    {
        num: "02",
        category: "VR Development",
        title: "Virtual Museum Ranggawarsita VR Version",
        description: "A VR game simulating a visit to the Ranggawarsita Museum, developed by CSAC Lab Udinus in collaboration with Central Java ICT Development Center (BPTIK), where I am the main programmer.",
        stack: [{ name: "C#"}, {name: "Unity"}, {name: "Photon"}],
        image: "",
        video: "https://drive.google.com/file/d/1b8e9TlDKAMtao-7K6zNuBdRbJ9D_X13N/preview",
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "Game Development",
        title: "Mobile Virtual  Museum Ranggawarsita",
        description: "A mobile game simulating a visit to the Ranggawarsita Museum, developed by CSAC Lab Udinus in collaboration with Central Java ICT Development Center (BPTIK), where I am the main programmer.",
        stack: [{ name: "C#"}, {name: "Unity"}],
        image: "",
        video:"https://drive.google.com/file/d/1tbzOYiOCZGoKMoQl2D2pwAW9UqlXkU8q/preview",
        live: "",
        github: "",
    },
    {
        num: "04",
        category: "Game Development",
        title: "eGamelanku 2.0",
        description: "A single and multiplayer mobile game for learning and playing Gamelan (traditional Javanese music) instruments like Demung, Saron, and Peking with friends anytime, anywhere. Developed by CSAC Lab Udinus, where I am the main programmer.",
        stack: [{ name: "C#"}, {name: "Unity"}, {name: "Photon"}],
        image: "",
        video: "https://drive.google.com/file/d/1Yb2nUALsw6AwX043f8cY_QxjdJx4O2au/preview",
        live: "",
        github: "",
    },
    {
        num: "05",
        category: "Game Development",
        title: "Gadeva",
        description: "An RPG game that tells the story of a child who enters a game world and must complete various levels with different difficulty levels to escape. I worked as the Game Designer, Game Programmer, and 2D Game Artist.",
        stack: [{ name: "C#"}, {name: "Unity"}, {name: "Adobe Illustrator"}],
        image: "",
        video: "https://drive.google.com/file/d/1cTt5k6cnrdF9EzrZYWv7IW-WiAfF18ZM/preview",
        live: "https://kayubakar0.itch.io/24-gadeva",
        github: "",
    },
    {
        num: "06",
        category: "Game Development",
        title: "Jumping Boba",
        description: "The first game I created using Construct 2, where the goal is to collect as many coins or diamonds as possible without falling off the platform. It features 3 maps with different seasonal themes.",
        stack: [{ name: "Construct2"}, {name: "Adobe Illustrator"}],
        image: "",
        video: "https://drive.google.com/file/d/1F028OseYPJmt_n9traCUSIuANabt2GuG/preview",
        live: "https://syafirarosa.itch.io/jumping-boba",
        github: "",
    },
    {
        num: "07",
        category: "Web Development",
        title: "Covid19 Monitoring Website",
        description: "A website project using an API that I created for my advanced web programming course. The website displays a realtime information about the global spread of COVID-19 cases.",
        stack: [{ name: "Php"}, {name: "CSS"}, {name: "Bootstrap"}, {name: "Javascript"}],
        image: "/assets/1.png",
        video: "",
        live: "https://www.youtube.com/watch?v=RTp83VCeQKU",
        github: "",
    },
    {
        num: "08",
        category: "Web Development",
        title: "Magic Shop Website",
        description: "An online shop website project I created for my basic web programming course. The website features an admin dashboard and a buyer dashboard. Buyers can view BTS merchandise products and make transactions. Admins can manage products and view product order lists.",
        stack: [{ name: "Php"}, {name: "CSS"}, {name: "Bootstrap"}, {name: "Javascript"}],
        image: "/assets/2.png",
        video: "",
        live: "https://www.youtube.com/watch?v=WV2ED4TMefg",
        github: "",
    },
    {
        num: "09",
        category: "Graphic Design",
        title: "My Design",
        description: "I offer creative graphic design services, including eye-catching IG feed designs, IG stories, web banners, billboards, virtual backgrounds, virtual stages, IG story filters, and much more.",
        stack: [{ name: "Adobe Illustrator"}, {name: "Adobe After Effects"}, {name: "Adobe Photoshop"}],
        image: "/assets/3.png",
        video: "",
        live: "https://sticky-feather-756.notion.site/My-Design-4d6a4c177c7c48cc84757cc5c546ca2f",
        github: "",
    },
    {
        num: "10",
        category: "Teacher",
        title: "Coding Teacher",
        description: "I teach coding for kids and teens, covering game programming, VR/AR, web development, Python, AI, and robotics.",
        stack: [{ name: "Javascript"}, {name: "Python"}, {name: "Scratch"}, {name: "Roblox"}],
        image: "/assets/4.png",
        video: "",
        live: "",
        github: "",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setActiveIndex(currentIndex); 
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0}}
            animate={{ 
                opacity: 1,
                transition: {delay: 1.5, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="flex items-center gap-4">
                                {/* outline num */}
                                <div className="text-7xl leading-none font-extrabold text-transparent text-outline">
                                    {project.num}
                                </div>
                                <span className="w-[6px] h-[60px] bg-accent"></span>
                                {/* project category */}
                                <div className="text-accent px-4 py-1 rounded-lg text-xl">
                                    {project.category}
                                </div>
                            </div>
                            {/* project title */}
                            <h2 className="text-[38px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.title}
                            </h2>
                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                {project.live && (
                                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[55px] h-[55px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>See More</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                )}
                                {/* github project button */}
                                {project.github && (
                                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[55px] h-[55px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Github Repository</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-[#2d2f42]">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10"></div>
                                            {/* Embed Google Drive Video if available */}
                                            {project.video && index === activeIndex ? (
                                                <div className="relative w-full h-full">
                                                    <iframe
                                                        src={project.video}
                                                        width="100%"
                                                        height="100%"
                                                        allow="autoplay"
                                                        frameBorder="0"
                                                        className="object-cover"
                                                    />
                                                </div>
                                            ) : project.image ? (
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={project.image}
                                                        fill
                                                        className="object-cover"
                                                        alt="Project image"
                                                    />
                                                </div>
                                            ) : null}
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/* slider buttons */}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;