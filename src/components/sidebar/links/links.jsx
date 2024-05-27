import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const items = [
  'Home',
  'About',
  'Resume',
  'Serivces',
  'Portfolio',
  'Certificates',
  'Contact',
];
const Links = ({ setOpen }) => {
  return (
    <motion.div className="links" variants={variants}>
      {items.map(item => (
        <motion.a
          href={`#${item}`}
          key={item}
          className="text-xl"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen((close = !close))}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
