'use client'

import { navVariants } from "@/utils/motion";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={` sm:px-16 px-6 py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`2xl:max-w-[1280px] w-full mx-auto flex justify-between items-center gap-8`}
      >
        <img src="/search.svg" alt="Search" className=" w-[24px] h-[24px]" />
        <h1 className=" text-white text-[24px] font-bold leading-[30.24px]">METAVERSUS</h1>
        <img src="/menu.svg" alt="Search" className=" w-[24px] h-[24px]" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
