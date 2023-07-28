"use client";
import { useState } from "react";
import { exploreWorlds } from "@/constants";
import { staggerContainer, textContainer ,textVariant2} from "@/utils/motion";
import { motion } from "framer-motion";
import ExplorCard from "./ExplorCard";
const Explor = () => {
  const [active, setActive] = useState("world-2");
  return (
    <section id="explore" className="sm:px-16 xs:p-8 px-6 py-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" 2xl:max-w-[1280px] mx-auto flex flex-col "
      >

        <motion.h4
          variants={textContainer}
          className="text-[14px] font-normal text-secondary-white leading-[17.64px] text-center"
        >
          | The World
        </motion.h4>
        <motion.h2
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="md:text-[64px]  text-[30px] font-bold mt-2 text-white  text-center"
        >
          Choose the world you want
          <br className="md:block hidden" /> to explore
        </motion.h2>
        <div className="mt-10 flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExplorCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explor;
