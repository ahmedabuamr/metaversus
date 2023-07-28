'use client'
import { insights } from "@/constants";
import InsightsCard from "./InsightsCard";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
const Insights = () => {
  return (
    <section className=" sm:px-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.dev
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <h4 className="text-[14px] font-normal text-center text-secondary-white leading-[17.64px] ">
          | Insight
        </h4>
        <h2 className="text-white mt-3 font-bold md:text-[64px] text-[30px] text-center md:leading-[76.8px] leading-[50.8px]">
          Insight about metaverse
        </h2>

        <div className=" mt-10 flex flex-col gap-8">
          {insights.map((item, index) => (
            <InsightsCard
              item={item}
              key={`insight-${index}`}
              index={index + 1}
            />
          ))}
        </div>
      </motion.dev>
    </section>
  );
};

export default Insights;
