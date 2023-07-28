"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer, zoomIn } from "@/utils/motion";
const FeedBack = () => {
  return (
    <section className="sm:px-16 xs:p-8 px-6 py-12">
      <motion.dev
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.dev
          variants={fadeIn("right", "tween", 0.2, 1)}
          className=" flex-[0.5] lg:max-w-[370px] flex flex-col justify-end   gradient-05 sm:p-8 p-4 border-[1px] border-[#6A6A6A] rounded-[32px] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className=" font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              Samantha{" "}
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Founder Metaverus
            </p>
          </div>
          <p className="mt-5 text-white text-[24px] font-normal sm:leading-[45.6px] leading-[30px]">
            “With the development of today's technology, metaverse is very
            useful for today's work, or can be called web 3.0. by using
            metaverse you can use it as anything”
          </p>
        </motion.dev>
        <motion.dev
          variants={fadeIn("left", "tween", 0.2, 1)}
          className=" flex-1 relative flex justify-center items-center "
        >
          <img
            src="/planet-09.png"
            className=" w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
          />
          <motion.dev variants={zoomIn(0.4, 1)} className="lg:block hidden absolute -left-[10%] top-[8%]">
            <img
              src="/stamp.png"
              className="w-[155px] h-[155px] object-contain"
            />
          </motion.dev>
        </motion.dev>
      </motion.dev>
    </section>
  );
};

export default FeedBack;
