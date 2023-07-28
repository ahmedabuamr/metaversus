"use client";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
const Hero = () => {
    return (
        <section className=" sm:py-16 xs:py-8 py-12 sm:pl-16 pl-6">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="2xl:max-w-[1280px] w-full mx-auto flex  flex-col"
            >
                <div className=" flex flex-col relative justify-center items-center z-[10]">
                    <motion.h1 variants={textVariant(1.1)} className=" heroHeading">
                        Metaversus
                    </motion.h1>
                    <motion.div
                        variants={textVariant(1.2)}
                        className=" flex flex-row items-center justify-center"
                    >
                        <h1 className="heroHeading">Ma</h1>
                        <div className="heroDText" />
                        <h1 className="heroHeading">Ness</h1>
                    </motion.div>
                </div>

                <motion.div
                    variants={slideIn('right', 'tween', 0.2, 1)}
                    className="relative w-full md:-mt-[54px] -mt-[25px]"
                >
                    {/* <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" /> */}

                    <img
                        src="/cover.png"
                        alt="hero_cover"
                        className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
                    />

                    <a href="#explore">
                        <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
                            <img
                                src="/stamp.png"
                                alt="stamp"
                                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
                            />
                        </div>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;