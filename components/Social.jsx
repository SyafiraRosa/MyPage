import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/SyafiraRosa"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/syafira-rosa-amalia/"},
    {icon: <FaYoutube />, path: "https://www.youtube.com/@syafirarosa"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/syafirarosa/"},
];

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer" className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;