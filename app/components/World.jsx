"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
const World = () => {
  return (
    <section className="sm:px-16 xs:p-8 px-6 py-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col justify-center items-center"
      >
        <div className=" text-center">
          <h4 className="text-[14px] font-normal text-secondary-white leading-[17.64px] ">
            | People on the World
          </h4>
          <h2 className="text-white mt-3 font-bold md:text-[64px] text-[30px] md:leading-[76.8px] leading-[50.8px]">
            Track friends around you and <br className="md:block hidden" />{" "}
            invite them to play together in <br className="md:block hidden" />{" "}
            the same world
          </h2>
        </div>
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img src="/map.png" className=" w-full h-full object-cover" />

          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="people-01.png" alt="people" className="w-full h-full" />
          </div>

          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="/people-02.png" alt="people" className="w-full h-full" />
          </div>

          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="people-03.png" alt="people" className="w-full h-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
