import Sidebar from '../sidebar/Sidebar';
import './nav.scss';
import { motion } from 'framer-motion';
const Nav = () => {
  return (
    <div>
      <Sidebar />
      <div className="h-18 sm:h-20 flex justify-between items-center pt-8 sm:pt-4 px-4 sm:pl-24 sm:pr-8">
        <motion.div
          className="flex"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <span>
            <i class="fa-solid fa-stethoscope"></i>
          </span> */}
          <span>
            <h1 className="text-lg sm:text-xl headres">Meb Doctor Tech</h1>
          </span>
        </motion.div>
        <div>
          <a
            className="mx-1 sm:mx-2"
            target="_blank"
            href="https://www.instagram.com/dr.erick_46/?igshid=OGU0MmVlOWVjOQ%3D%3D"
          >
            <i className="fa-brands fa-instagram text-lg   socialhover"></i>
          </a>
          <a
            className="mx-1 sm:mx-2"
            href="https://www.youtube.com/@mebdoctor"
            target="_blank"
          >
            <i className="fa-brands fa-youtube text-lg   socialhover"></i>
          </a>
          <a
            className="mx-1 sm:mx-2"
            href="https://www.linkedin.com/in/erick-p-joshy-3316261b7/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin text-lg  socialhover"></i>
          </a>
          <a
            className="mx-1 sm:mx-2"
            href="https://github.com/erickpjoshy"
            target="_blank"
          >
            <i className="fa-brands fa-github text-lg  socialhover"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
