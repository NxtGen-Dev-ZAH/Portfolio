import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  text: string;
}

const ProjectCard = ({ image, title, text }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <motion.div
      className="w-[180px] h-[180px] md:w-[450px] md:h-[250px] rounded-md cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.1 }}
    >
      <div onClick={handleFlip} className="w-full h-full relative">
        <motion.div
          className="flip-card-inner w-full h-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4"
          >
            <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
            <div className="absolute inset-0 w-full h-full text-[16px] md:text-[20px] font-bold pb-4 hidden group-hover:flex items-center z-[20] justify-end ">
              Learn more &gt;
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4"
          >
            <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]" />
            <div className="flex flex-col gap-4 py-3 z-[30]">
              <h1 className="text-white text-base md:text-2xl font-semibold">
                {title}
              </h1>
              <p className="text-gray-200 text-xs md:text-base">{text}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
