import React, {useRef, useState} from "react";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";

import {styles} from "../styles";
import {EarthCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";
import {slideIn} from "../utils/motion";

const Gift = () => (
    <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
        <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
            <p className={styles.sectionSubText}>Finally</p>
            <h3 className={styles.sectionHeadText}>It's yours!</h3>

            <p>Подписка на 12 месяцев <a href="/assest/sert.pdf" target="_blank" className='text-[#05ff00]'>журналус! (by A. Lebedev team)</a></p>
            <br/>
            <p>Насмотренности много не бывает, а когда материал в красивом виде сам приходит к тебе, да еще и со всеми новинками и ресурсами..</p>
            <br/>
            <p>В общем, пользуйся как хочешь, когда хочешь, и сколько хочешь!</p>
        </motion.div>

        <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
            <EarthCanvas/>
        </motion.div>
    </div>
);

export default SectionWrapper(Gift, "gift");
