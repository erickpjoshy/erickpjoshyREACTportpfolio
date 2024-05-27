import './sidebar.scss';
import { motion } from 'framer-motion';
import Tooglebutton from './tooglebuttons/Tooglebutton';
import Links from './links/links';
import { useState } from 'react';

const Sidebar = () => {
  const variants = {
    open: {
      clipPath: 'circle(1200px at 55px 50px)',
      transition: {
        type: 'spring',
        shiftness: 200,
      },
    },
    closed: {
      clipPath: 'circle(25px at 55px 50px)',
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 400,
        damping: 35,
      },
    },
  };
  const [close, setOpen] = useState(true);
  return (
    <motion.div className="sidebar" animate={close ? 'closed' : 'open'}>
      <motion.div className="bg" variants={variants}>
        <Links setOpen={setOpen} />
        <Tooglebutton setOpen={setOpen} />
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
