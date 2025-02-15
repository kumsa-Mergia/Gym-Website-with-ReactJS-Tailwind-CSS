import React from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

const Banner2 = () => {
  return (
    <>
      <div className="p-16 my-14">
        <div className="bg-[#f9f9f9] py-14 md:py-24 flex justify-center items-center">
          {/* brand info */}
          <div className="flex flex-col justify-center text-center space-y-8 lg:px-44">
            <motion.h1
              variants={SlideLeft(0.5)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold"
            >
              Get 20 % Discount on Your First Order, Are You Ready To Buy
            </motion.h1>
            <motion.p
              variants={SlideLeft(0.7)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className=""
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae libero tempora deserunt commodi aspernatur quod modi.
              Cum quos et consectetur nam saepe magnam! Impedit dolor voluptas
              neque, quas delectus non!
            </motion.p>
            <motion.div
              variants={SlideLeft(0.9)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="flex justify-center gap-6"
            >
              <button className="bg-cyan-500 items-center gap-2 rounded-md border-2 p-2 text-white">
                Learn More
              </button>
              <button className="border-bg-cyan-500  items-center px-5 rounded-lg rounded-md border-2 p-2 text-cyan-500">
                Stay InTouch
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner2;
