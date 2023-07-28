"use client";
import { newFeatures } from "@/constants";
import { motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";
const WhatsNew = () => {
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
          variants={fadeIn("right", "tween", 0.2, 1)}
          className=" flex-[0.95] flex justify-center flex-col"
        >
          <h4 className="text-[14px] font-normal text-secondary-white leading-[17.64px] ">
            | Whats New?
          </h4>
          <h2 className="text-white mt-3 font-bold md:text-[64px] text-[30px] md:leading-[76.8px] leading-[30.8px]">
            What's new about <br className="md:block hidden" /> Metaversus?
          </h2>

          <div className=" mt-[48px] flex  justify-between gap-[20px]">
            {newFeatures.map((item) => (
              <div
                className=" flex-1  flex flex-col sm:max-w-[250px] min-w-[210px]"
                key={item.id}
              >
                <div className="h-[70px] w-[70px] rounded-[24px] flex justify-center items-center bg-[#323F5D]">
                  <img
                    src={item.imgUrl}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
                <h4 className=" text-white text-[24px] my-4 font-normal">
                  {item.title}
                </h4>
                <p className=" text-[#B0B0B0] text-[18px] font-normal">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className=" flex flex-[0.75] justify-center items-center"
        >
          <img
            src="/whats-new.png"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
