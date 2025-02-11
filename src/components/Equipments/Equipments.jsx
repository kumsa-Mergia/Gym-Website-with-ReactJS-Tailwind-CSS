import React from "react";
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

const EquipmentData = [
  {
    id: 1,
    title: "Yoga Equipments",
    desc: "Enhance your practice with premium yoga mats, blocks, and straps for balance, flexibility, and mindfulness.",
    icon: <GrYoga />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Muscle Equpment",
    desc: "Build strength and endurance with high-quality dumbbells, resistance bands, and weightlifting gear.",
    icon: <FaDumbbell />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Fitness Equipments",
    desc: "Achieve your fitness goals with cutting-edge treadmills, exercise bikes, and home gym essentials.",
    icon: <GiGymBag />,
    delay: 0.3,
  },
];
const Equipments = () => {
  return (
    <>
      <div className="p-16 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
          <div className="space-y-4 p-6">
            <h1 className="text-3xl md:text-4xl font-bold">
              What We Offer For You
            </h1>
            <p className="text-gray-500">
              It is a long established fact that a reader redable
            </p>
          </div>
          {EquipmentData.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView="visible"
                key={item.id}
                className="space-y-4 p-6 bg-[#fbfbfbf] hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
              >
                <div className="text-4xl font-semibold">{item.icon}</div>
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Equipments;
