import React from 'react';
import './portfolio.scss';

const PortFolio = () => {
  return (
    <div className="sec5bg">
      <div className="section-start px-4 sm:px-24">
        <div className="sectiontitle">
          <h2>PORTFOLIO</h2>
          <p>MY WORKS</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 justify-center mt-10 gap-4">
          <div className="img-container relative my-works-hover">
            <div className="opa">
              <img
                src="/mebdoctortechtodolist.png"
                className="w-full h-full object-contain"
                alt="erickpjoshy-todolist"
              />
            </div>
            <div className="absolute top-0 w-full h-full my-works-hover-effect">
              <p className="justify-center flex items-center h-full w-full">
                <i class="fa-solid fa-link mr-2"></i>
                <a
                  className=""
                  href="https://todolist.erickpjoshy.cloud/"
                  target="_blank"
                >
                  visit mebdoctorTech toDoList
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
