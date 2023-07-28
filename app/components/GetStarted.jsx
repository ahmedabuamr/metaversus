"use client";
import { startingFeatures } from "@/constants";
import StartSteps from "./StartSteps";
import { motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";

const GetStarted = () => {
  return (
    <section className="sm:px-16 xs:p-8 px-6 py-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] mx-auto w-full flex md:flex-row flex-col gap-8"
      >
        <motion.div
          variants={planetVariants("left")}
          className=" flex-1 flex justify-center items-center"
        >
          <img
            src="/get-started.png"
            className=" w-[90%] h-[90%] object-cover"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className=" flex flex-[0.75] justify-center flex-col"
        >
          <h4 className="text-[14px] font-normal text-secondary-white leading-[17.64px] ">
            | How Metaverus Works
          </h4>
          <h2 className=" text-white mt-3 font-bold md:text-[64px] text-[30px] md:leading-[76.8px] leading-[30.8px]">
            Get started <br className="md:block hidden" /> with just a few
            clicks
          </h2>
          <div className="mt-5 flex flex-col max-w-[390px] gap-4">
            {startingFeatures.map((item, index) => (
              <StartSteps
                item={item}
                key={item}
                number={`${index < 10 ? "0" : ""} ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
