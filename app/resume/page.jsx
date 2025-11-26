"use client";

import {
    FaUnity,
    FaHtml5,
    FaCss3,
    FaJs,
    FaPhp,
    FaPython,
    FaFigma,
} from "react-icons/fa";

import {
    TbBrandCSharp,
} from "react-icons/tb";

import {
    SiCplusplus,
    SiAnaconda,
    SiJupyter,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobeaftereffects,
    SiAdobepremierepro,
    SiConstruct3,
    SiRobloxstudio,
    SiAseprite,
    SiCanva,
} from "react-icons/si";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import Flag from 'react-world-flags';

//about data
const about = {
    title: "About me",
    description:
     "Hi there! I'm Syafira, a passionate game developer, VR/AR enthusiast, and creative designer who loves turning ideas into reality. I enjoy learning and sharing new things, especially when it sparks creativity and innovation. Beyond my tech world, I have a deep love for music and play the violin to keep the harmony alive. Let’s create something amazing together!",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Syafira Rosa Amalia"
        },
        {
            fieldName: "Email",
            fieldValue: "firarosa966@gmail.com"
        },
        {
            fieldName: "Experience",
            fieldValue: "3+ Years"
        },
        {
            fieldName: "Nationality",
            fieldValue: (
                <>
                    Indonesian<Flag code="ID" width="20" style={{ verticalAlign: 'middle', marginLeft: '8px', display: 'inline-block' }}/>
                </>
            )
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages",
            fieldValue: (
                <div className="flex flex-col items-start">
                    <div className="flex items-center">
                        <span className="mr-2">Indonesian</span>
                        <Flag code="ID" width="20" style={{ verticalAlign: 'middle' }} />
                    </div>
                    <div className="flex items-center mt-1">
                        <span className="mr-2">English</span>
                        <Flag code="GB" width="20" style={{ verticalAlign: 'middle' }} />
                    </div>
                </div>
            )
        },
    ]
};

const workExperience = {
    icon: "/assets/badge.png",
    title: "My Work Experience",
    description: "Blending teaching, programming, design, and research, I bring creativity, technical expertise, and a passion for innovation and education.",
    items: [
        {
            organization: "Timedoor Academy",
            position: "Part-Time Programming Teacher",
            duration: "Nov 2024 - Present",
        },
        {
            organization: "CSAC Research Lab UDINUS",
            position: "Contract Game Programmer",
            duration: "May 2024 - Present",
        },
        {
            organization: "Public Relation of UDINUS",
            position: "Intern Graphic Designer",
            duration: "Aug 2021 - Dec 2022",
        },
        {
            organization: "SIDJI Game Studio",
            position: "Contract Game Programmer",
            duration: "Apr 2022 - Jul 2022",
        },
        {
            organization: "UDINUS",
            position: "Assistant Lecturer in Programming and HCI",
            duration: "Mar 2022 - Oct 2022",
        },
        {
            organization: "UDINUS",
            position: "Laboratory Assistant in Basic Programming",
            duration: "Mar 2021 - Des 2021",
        },
    ]
};

const research = {
    icon: "",
    title: "My Research ",
    description: "Exploring diverse topics in AI and HCI , my research combines innovation and technical expertise to tackle complex challenges.",
    items: [
        {
            title: "Performance Comparison of k-Nearest Neighbor Algorithm with Various k Values and Distance Metrics for Malware Detection",
            link: "https://www.researchgate.net/publication/382629523_Performance_Comparison_of_k-Nearest_Neighbor_Algorithm_with_Various_k_Values_and_Distance_Metrics_for_Malware_Detection",
            role: "Author, Dataset Collector, Researcher",
            duration: "Oct 2023 - Jan 2024",
            details: [
                "Publish national journal article",
                "Achieve Intellectual Property Rights by Ministry of Law and Human Rights of The Republic of Indonesia",
            ],
        },
        {
            title: "Malware Detection Using K-Nearest Neighbor Algorithm and Feature Selection",
            link: "https://www.researchgate.net/publication/382632006_Malware_Detection_Using_K-Nearest_Neighbor_Algorithm_and_Feature_Selection",
            role: "Author, Dataset Collector, Researcher",
            duration: "Oct 2023 - Jan 2024",
            details: [
                "Publish national journal article",
                "Achieve Intellectual Property Rights by Ministry of Law and Human Rights of The Republic of Indonesia",
            ],
        },
        {
            title: "Deep Learning Accelerator for Mixed Precision Neural Network",
            link: "",
            role: "Model Builder, Research Collaborator",
            duration: "Nov 2022 - Nov 2023",
            details: [
                "Research Collaborator in Garuda ACE program by Ministry of Education, Culture, Research and Technology of the Republic of Indonesia and University of Chicago",
                "Building quantization scheme for bit pruning",
            ],
        },
        {
            title: "Conversion Model of Kepatihan Notation into MIDI Format for Generating Original Western Music",
            link: "https://publikasi.dinus.ac.id/index.php/technoc/article/view/6672",
            role: "First Author, Model Builder, Researcher",
            duration: "Aug 2021 - Aug 2022",
            details: [
                "Publish national journal article",
            ],
        },
        {
            title: "Generation of Classical Music Using the Long-Short Term Memory Method",
            link: "https://www.researchgate.net/publication/363484377_Pembangkitan_Musik_Klasik_Menggunakan_Metode_Long-Short_Term_Memory",
            role: "Author, Model Builder, Researcher",
            duration: "Aug 2021 - Aug 2022",
            details: [
                "Publish national journal article",
            ],
        },
    ]
};

// const project = {
//     icon: "",
//     title: "My Projects",
//     description: "Showcasing innovative multiplayer VR and mobile games, my projects bring technologies to life through immersive and interactive experiences.",
//     items: [
//         {
//             title: "Multiplayer Virtual Reality Game - Regional Museum Ranggawarsita",
//             role: "Main Programmer",
//             duration: "May 2024 - Present",
//             details: ["Create a VR for Regional Museum Ranggawarsita prototype",],
//         },
//         {
//             title: "Multiplayer Mobile Game - Regional Museum Ranggawarsita",
//             role: "Main Programmer",
//             duration: "May 2024 - Present",
//             details: ["Create a 3D mobile game for Regional Museum Ranggawarsita prototype",],
//         },
//         {
//             title: "Multiplayer Mobile Game - eGamelanku V2.0",
//             role: "Main Programmer",
//             duration: "May 2024 - Present",
//             details: ["Create a multiplayer mobile game for traditional Javanese musical instruments (Gamelan)",],
//         },
//         {
//             title: "Multiplayer Virtual Reality Game - Gamelan Metaverse",
//             role: "Main Programmer",
//             duration: "Apr 2022 - Oct 2022",
//             details: ["Create an Online Multiplayer VR Game for a Gamelan Simulation",],
//         },
//     ]
// };

const education = {
    icon: "/assets/cap.png",
    title: "My Education",
    description: "With a strong foundation in Informatics Engineering, I have furthered my expertise in AI, game development, and multiplayer VR development.",
    items: [
        {
            institution: "Warsaw University of Technology",
            degree: "Master of Computer Science",
            grade: "",
            duration: "Oct 2025 - Present",
        },
        {
            institution: "Universitas Dian Nuswantoro",
            degree: "Bachelor Degree in Informatics Engineering",
            grade: "3.85 / 4.00",
            duration: "Aug 2019 - Aug 2023",
        },
        {
            institution: "Orbit Future Academy",
            degree: "Certificate in AI Mastery Program",
            grade: "4.00 / 4.00",
            duration: "Feb 2022 - Jul 2022",
        },
        {
            institution: "Agate Academy",
            degree: "Certificate in Game Development",
            grade: "88.75 / 100.00",
            duration: "Aug 2021 - Jan 2022",
        },
        {
            institution: "Udemy",
            degree: "Certificate in Multiplayer VR Development with Unity",
            grade: "",
            duration: "Apr 2022",
        },
    ]
};

const organizationExperience = {
    icon: "",
    title: "My Organizational Experience",
    description: "Proven leadership in guiding teams, managing communication, and driving technology-focused initiatives.",
    items: [
        {
            organization: "Student Executive Board (BEM-KM)",
            position: "Head of Communication and Informatics Bureau",
            duration: "Aug 2020 - Jul 2021",
        },
        {
            organization: "Dian Nuswantoro Computer Club (DNCC)",
            position: "Head of Mobile Developer Division",
            duration: "Aug 2020 - Jul 2021",
        },
    ]
};

// const otherExperience = {
//     icon: "",
//     title: "My Other Experience",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     items: [
//         {
//             organization: "Universitas Dian Nuswantoro",
//             position: "Assistant Lecturer",
//             duration: "Mar 2022 - Oct 2022",
//             details: "Basic Programming, Algorithm and Programming, and HCI",
//         },
//         {
//             organization: "Universitas Dian Nuswantoro",
//             position: "Laboratory Assistant",
//             duration: "Mar 2021 - Des 2021",
//             details: "Basic Programming",
//         },
//     ]
// };

const skills = {
    icon: "",
    title: "My Skills",
    description: "Skilled in a wide range of programming languages, game development tools, and creative software.",
    items: [
        {
            icon: <TbBrandCSharp />,
            name: "C#",
        },
        {
            icon: <FaHtml5 />,
            name: "HTML5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS3",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaPhp />,
            name: "Php",
        },
        {
            icon: <FaPython />,
            name: "Python",
        },
        {
            icon: <SiCplusplus />,
            name: "C++",
        },
        {
            icon: <FaUnity />,
            name: "Unity",
        },
        {
            icon: <SiConstruct3 />,
            name: "Construct 3",
        },
        {
            icon: <SiRobloxstudio />,
            name: "Roblox Studio",
        },
        {
            icon: <SiAnaconda />,
            name: "Anaconda",
        },
        {
            icon: <SiJupyter />,
            name: "Jupyter",
        },
        {
            icon: <SiAdobeillustrator />,
            name: "Adobe Illustrator",
        },
        {
            icon: <SiAdobephotoshop />,
            name: "Adobe Photoshop",
        },
        {
            icon: <SiAdobeaftereffects />,
            name: "Adobe After Effects",
        },
        {
            icon: <SiAdobepremierepro />,
            name: "Adobe Premiere Pro",
        },
        {
            icon: <SiAseprite />,
            name: "Aseprite",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
        {
            icon: <SiCanva />,
            name: "Canva",
        },
    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {delay: 1.5, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="workExperience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        
                        <TabsTrigger value="workExperience">Work Experience</TabsTrigger>
                        <TabsTrigger value="organizationExperience">Organizational Experience</TabsTrigger>
                        {/* <TabsTrigger value="otherExperience">Other Experience</TabsTrigger> */}
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="research">Research</TabsTrigger>
                        {/* <TabsTrigger value="project">Projects</TabsTrigger> */}
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* work experience */}
                        <TabsContent value="workExperience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{workExperience.title}</h3>
                                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                                    {workExperience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
                                        {workExperience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#2d2f42] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.organization}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* research */}
                        <TabsContent value="research" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{research.title}</h3>
                                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                                    {research.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
                                        {research.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#2d2f42] h-[600px] py-6 px-10 rounded-xl flex flex-col  items-center lg:items-start gap-5"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h4 className="text-m max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.link ? (
                                                            <a
                                                                href={item.link} 
                                                                target="_blank" 
                                                                rel="noopener noreferrer" 
                                                                className="hover:text-accent"
                                                            >
                                                                {item.title}
                                                            </a>
                                                        ) : (
                                                            <span className="text-white">{item.title}</span> // Plain text if no link
                                                        )}
                                                    </h4>
                                                    <div className="flex items-center gap-3">
                                                        
                                                        {/* bar */}
                                                        <span className="w-[6px] h-[50px] bg-accent"></span>
                                                        <p className="text-white/60">{item.role}</p>
                                                    </div>
                                                    {/* Render multiple dots and details */}
                                                    <div className="flex flex-col gap-2">
                                                        {item.details.map((detail, i) => (
                                                            <div
                                                                key={i}
                                                                className="flex items-start gap-3"
                                                            >
                                                                {/* Dot */}
                                                                <span className="w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0 mt-[12px]"></span>
                                                                {/* Align details */}
                                                                <p className="text-white/60">{detail}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* projects */}
                        {/* <TabsContent value="project" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{project.title}</h3>
                                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                                    {project.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
                                        {project.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#2d2f42] h-[410px] py-6 px-10 rounded-xl flex flex-col  items-center lg:items-start gap-5"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h4 className="text-m max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.title}
                                                    </h4>
                                                    <div className="flex items-center gap-3">
                                                        
                                                        {/* bar */}
                                                        {/* <span className="w-[6px] h-[50px] bg-accent"></span>
                                                        <p className="text-white/60">{item.role}</p>
                                                    </div> */}
                                                    {/* Render multiple dots and details */}
                                                    {/* <div className="flex flex-col gap-2">
                                                        {item.details.map((detail, i) => (
                                                            <div
                                                                key={i}
                                                                className="flex items-start gap-3"
                                                            >
                                                                {/* Dot */}
                                                                {/* <span className="w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0 mt-[12px]"></span> */}
                                                                {/* Align details */}
                                                                {/* <p className="text-white/60">{detail}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent> */}

                        {/* Education */}
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#2d2f42] h-[320px] py-6 px-10 rounded-xl flex flex-col  items-center lg:items-start gap-5"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-m max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                    {item.grade && (
                                                    <div className="flex items-center gap-3">
                                                        {/* Bar */}
                                                        <span className="w-[6px] h-[50px] bg-accent"></span>
                                                        <p className="text-white/60">
                                                            <strong className="text-white/60 text-2xl">{item.grade.split(" ")[0]}</strong>{" "}
                                                            {item.grade.split(" ").slice(1).join(" ")}
                                                        </p>
                                                    </div>
                                                )}
                                                    <div className="flex gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent mt-[12px]"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* organizational experience */}
                        <TabsContent value="organizationExperience" className="w-full">
                            <div className="flex flex-col gap-[40px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{organizationExperience.title}</h3>
                                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                                    {organizationExperience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
                                        {organizationExperience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#2d2f42] h-[220px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent mt-[12px]"></span>
                                                        <p className="text-white/60">{item.organization}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* other experience */}
                        {/* <TabsContent value="otherExperience" className="w-full">
                            others
                        </TabsContent> */}

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 xl:gap-[30px]">
                                    {skills.items.map((items,index) => {
                                        return (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[120px] bg-[#2d2f42] rounded-xl flex justify-center items-center group">
                                                        <div className="text-5xl group-hover:text-accent transition-all duration-300">{items.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{items.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-lg">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
