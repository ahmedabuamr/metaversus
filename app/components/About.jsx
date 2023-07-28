"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textContainer } from "@/utils/motion";
const About = () => {
  return (
    <section className="sm:px-16 xs:p-8 px-6 py-12">
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" 2xl:max-w-[1280px] mx-auto w-full flex justify-center items-center flex-col "
      >
        <motion.h4
          variants={textContainer}
          className=" text-[14px] font-normal text-secondary-white leading-[17.64px] text-center"
        >
          | About Metaverus
        </motion.h4>

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className=" mt-[8px] sm:text-[32px] text-[20px] text-secondary-white font-normal leading-[57.6px] text-center "
        >
          <span className=" text-white font-bold">Metaverse</span> is a new
          thing in the future, where you can enjoy the virtual world by feeling
          like it's really real, you can feel what you feel in this metaverse
          world, because this is really the{" "}
          <span className=" text-white font-bold">
            madness of the metaverse
          </span>{" "}
          of today, using only <span className=" text-white font-bold">VR</span>{" "}
          devices you can easily explore the metaverse world you want, turn your
          dreams into reality. Let's
          <span className=" text-white font-bold"> explore </span>the madness of
          the metaverse by scrolling down
        </motion.p>
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
};

export default About;
