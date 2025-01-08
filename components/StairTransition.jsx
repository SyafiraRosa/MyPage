"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import {motion} from "framer-motion";

//components
import Stairs from "./Stairs";

const StairTransition = () => {
    const pathname = usePathname();
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        const handlePageLoad = () => setIsPageLoaded(true);

        if (document.readyState === "complete") {
            handlePageLoad();
        } else {
            window.addEventListener("load", handlePageLoad);
            return () => window.removeEventListener("load", handlePageLoad);
        }
    }, []);
    return (
        <>
            <AnimatePresence mode="wait">
                <div key={pathname}>
                    <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
                        <Stairs />
                    </div>
                    
                    <motion.div
                        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                        initial={{opacity: 1}}
                        animate={{
                            opacity: 0,
                            transition: {delay: 0.5, duration: 0.4, ease: "easeInOut"},
                        }}
                    />
                </div>
            </AnimatePresence>
        </>
    );
};

export default StairTransition;