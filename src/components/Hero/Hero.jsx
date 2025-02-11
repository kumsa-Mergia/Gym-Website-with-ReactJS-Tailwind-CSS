import React from "react";
import { FaPlay } from "react-icons/fa6";
import HeroImg from "../../assets/dumbell.png";

import { motion } from "framer-motion";
import { SlideRight } from "../../utility/animation";
import { Rotate } from "../../utility/animation";
const Hero = () => {
  return (
    <>
      <section>
        <div className="p-16  grid grid-cols-1 md:grid-cols-2 min-h[650px] relative">
          {/* Brand Info */}
          <div className="flex flex-col justify-center py-14 md:py-0">
            <div className="text-center md:text-left spacy-y-6">
              <motion.h1
                variants={SlideRight(0.6)}
                initial="hidden"
                animate="visible"
                className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal"
              >
                Fitness Fuels Perfect{" "}
                <span className="text-cyan-500">Health✨</span>{" "}
              </motion.h1>
              <motion.p
                variants={SlideRight(1.2)}
                initial="hidden"
                animate="visible"
                className="text-gray-600 xl:max-w-[500px"
              >
                "Fitness is not just about building muscles; it's about building
                confidence, strength, and resilience. Every drop of sweat, every
                rep, brings you closer to your healthiest and strongest self."
                💪
              </motion.p>
              {/* Button Section */}
              <motion.div
                variants={SlideRight(1.5)}
                initial="hidden"
                animate="visible"
                className="flex justify-center items-center gap-8 md:justify-start !mt-4"
              >
                <button className="bg-cyan-500 flex items-center gap-2  p-2 text-white">
                  {" "}
                  Order Now
                </button>
                <button className="hover:bg-cyan-500 hover:text-white flex justify-center items-center gap-2   p-2">
                  <FaPlay /> Watch Now
                </button>
              </motion.div>
            </div>
          </div>
          {/* Brand Image */}
          <div className="flex justify-center items-center rounded-full">
            <motion.img
              variants={Rotate(0.5)}
              initial="hidden"
              animate="visible"
              src={HeroImg}
              alt="hero image"
              className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
