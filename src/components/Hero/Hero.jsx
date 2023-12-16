import React from 'react';
import '../Hero/hero.scss';
import { motion } from 'framer-motion';

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
      repeat: Infinity,
      duration: 2,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      duration: 20,
      repeatType: 'mirror',
      repeat: Infinity,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper flex px-4 sm:pl-24">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ERICK P JOSHY</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Web Developer
          </motion.h1>
          <motion.div variants={textVariants}>
            <motion.button variants={textVariants}>
              See the latest works
            </motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>
          <a className="down-arrow" href="#About">
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              className="w-10 pb-8"
              src="./scroll.png"
            ></motion.img>
          </a>
          <motion.div
            className="slidingTextContainer"
            variants={sliderVariants}
            initial="initial"
            animate="animate"
          >
            Mern Stack Developer
          </motion.div>
        </motion.div>
        <div className="imageContainer">
          <div className="imgst">
            <img className="imgst2" src="./erick3.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
