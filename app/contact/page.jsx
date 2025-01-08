"use client"

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaEnvelope, FaInstagram, FaDiscord, FaLinkedinIn } from "react-icons/fa";

const info = [
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "firarosa966@gmail.com",
    },
    {
        icon: <FaInstagram />,
        title: "Instagram",
        description: "@syafirarosa",
    },
    {
        icon: <FaDiscord />,
        title: "Discord",
        description: "nyonyakim",
    },
    {
        icon: <FaLinkedinIn />,
        title: "LinkedIn",
        description: "Syafira Rosa Amalia",
    },
];

import { motion } from "framer-motion";

const Contact = () => {
    const form = useRef();
    const [selectedService, setSelectedService] = useState('');
    const [formError, setFormError] = useState('');
      
    const sendEmail = (e) => {
        e.preventDefault();

        // Check if all required fields are filled
        const userName = form.current.user_name.value;
        const userEmail = form.current.user_email.value;
        const service = selectedService;
        const message = form.current.message.value;

        if (!userName || !userEmail || !service || !message) {
        setFormError('Please fill in all fields before submitting.');
        return; // Prevent form submission
        } else {
        setFormError(''); // Clear any previous error
        }

    const formData = new FormData(form.current);
    formData.append('service', selectedService);
      
        emailjs
            .sendForm('service_4kacsos', 'template_u73abso', form.current, {
              publicKey: 'K2C20aZlxCZhRRivE',
            })
            .then(
              () => {
                console.log('SUCCESS!');
                e.target.reset();
                setSelectedService('');
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
        };

    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 1.5, duration: 0.4, ease:"easeIn"},
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[60%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#2d2f42] rounded-xl" ref={form} onSubmit={sendEmail}>
                            <h3 className="text-4xl text-accent">Let's work together!✨</h3>
                            <p className="text-white/60">
                            Are you looking to inspire young minds with coding, create immersive VR/AR experiences, or develop innovative games? With passion and creativity, I’m here to turn your ideas into reality. Let’s bring your vision to life!
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="username" placeholder="Your Name" name="user_name" required/>
                                {/* <Input type="lastname" placeholder="Lastname" /> */}
                                <Input type="email" placeholder="Email Adress" name="user_email" required/>
                                {/* <Input type="phone" placeholder="Phone Number" /> */}
                            </div>
                            {/* select */}
                            <Select onValueChange={(value) => setSelectedService(value)} value={selectedService} name="service" required>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="game">Game Develompent</SelectItem>
                                        <SelectItem value="vr">VR/AR Develompent</SelectItem>
                                        <SelectItem value="web">Web Develompent</SelectItem>
                                        <SelectItem value="design">Graphic Design</SelectItem>
                                        <SelectItem value="teach">Coding Teacher</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* text area */}
                            <Textarea 
                                className="h-[100px]"
                                placeholder="Type your message here..💬"
                                name="message"
                                required
                            />
                            {formError && <p className="text-red-500">{formError}</p>} {/* Show error message */}
                            <Button size="md" className="max-w-40" value="submit">
                                Send message
                            </Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#2d2f42] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;