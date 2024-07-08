import {motion} from "framer-motion";

import {styles} from "../styles";
import {ComputersCanvas} from "./canvas";
import {useEffect, useState} from "react";

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const mobMediaQuery = window.matchMedia("(max-width: 860px)");
        const tabMediaQuery = window.matchMedia("(min-width: 1440px) and (min-height: 1440px)");
        setIsMobile(mobMediaQuery.matches);
        setIsTablet(tabMediaQuery.matches);
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };
        const handleTabletMediaQueryChange = (event) => {
            setIsTablet(event.matches);
        };
        mobMediaQuery.addEventListener("change", handleMediaQueryChange);
        tabMediaQuery.addEventListener("change", handleTabletMediaQueryChange);
        return () => {
            mobMediaQuery.removeEventListener("change", handleMediaQueryChange);
            tabMediaQuery.removeEventListener("change", handleTabletMediaQueryChange);
        };
    }, []);

    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]'/>
                    <div className='w-1 sm:h-80 h-40 violet-gradient'/>
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Bae, <span className='text-[#915EFF]'>happy birthday to you!</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        Read some wishes and take your gift{'<3'}
                    </p>
                </div>
            </div>

            <div
                className={`absolute inset-0`}
                style={{top: `${isMobile ? 250 : isTablet ? 500 : 150}px`}}
            >
                <ComputersCanvas/>
            </div>

            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div
                        className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
