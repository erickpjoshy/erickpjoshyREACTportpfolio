import React from 'react';
import './tooglebuttons.scss';
import { delay, motion } from 'framer-motion';

const Tooglebutton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((close = !close))}>
      <motion.i
        initial={{ opacity: 0.2, scale: 1 }}
        animate={{
          opacity: 1,
          scale: 1.3,
          transition: {
            repeat: Infinity,
            duration: 2,
          },
        }}
        whileHover={{ delay: 0.5, damping: 350, scale: 1.2 }}
        className={`fa-solid ${close ? 'fa-stethoscope' : 'fa-xmark'} b-icon`}
      ></motion.i>
    </button>
  );
};

export default Tooglebutton;
