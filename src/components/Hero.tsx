import profile from "../assets/images/Hero-img/profile.jpeg";
import { motion } from "motion/react";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const Hero = () => {
  return (
    <div className="h-[calc(100vh-100px)] bg-linear-to-b  from-[#0c0c1d] to-[#111132] overflow-hidden relative">
      <div className="max-w-341.5 h-100 m-auto">
        {/* Text Container */}
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="h-100 w-[50%] flex flex-col justify-center gap-10"
        >
          <motion.h2
            variants={textVariants}
            className="text-3xl text-purple tracking-wide"
          >
            EMMANUEL ADEYEMI
          </motion.h2>
          <motion.h1 variants={textVariants} className="text-7xl">
            Full-stack developer and UI designer
          </motion.h1>
          {/* Button */}
          <motion.div variants={textVariants} className="flex gap-4">
            <motion.button
              variants={textVariants}
              className="p-4 text-white border border-white rounded-xl font-medium bg-transparent cursor-pointer hover:bg-white hover:text-black"
            >
              See the Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              className="p-4 text-white border border-white rounded-xl font-medium bg-transparent cursor-pointer hover:bg-white hover:text-black"
            >
              Contact Me
            </motion.button>
          </motion.div>
          {/* <motion.img variants={textVariants} animate="scrollButton" src={scroll} alt="" className="w-[50px]"/> */}
        </motion.div>
      </div>
      <div className="absolute font-medium text-[50vh] -bottom-30  whitespace-nowrap text-[#ffffff09]">
        Fullstack developer Technical writer Computer Engineer
      </div>
      <div className="h-full absolute top-0 right-0">
        <img src={profile} alt="" className="h-115 w-80" />
      </div>
    </div>
  );
};
export default Hero;
