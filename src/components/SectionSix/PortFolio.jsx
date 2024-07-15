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
        <div className="grid grid-cols-1 md:grid-cols-4 justify-center mt-10 gap-6">
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
                <i className="fa-solid fa-link mr-2"></i>
                <a
                  className=""
                  href="https://todolist.erickpjoshy.cloud/"
                  target="_blank"
                >
                  Visit mebdoctorTech toDoList
                </a>
              </p>
            </div>
          </div>
          <div className="img-container relative my-works-hover">
            <div className="opa">
              <img
                src="/mebdochome.png"
                className="w-full h-full object-contain"
                alt="erickpjoshy-todolist"
              />
            </div>
            <div className="absolute top-0 w-full h-full my-works-hover-effect">
              <p className="justify-center flex items-center h-full w-full">
                <i className="fa-solid fa-link mr-2"></i>
                <a
                  className=""
                  href="https://mebonlinedoctorbooking.erickpjoshy.cloud/"
                  target="_blank"
                >
                  Visit Online Doctor Booking Website
                </a>
              </p>
            </div>
          </div>
          <div className="img-container relative my-works-hover">
            <div className="opa">
              <img
                src="/toolmechome.png"
                className="w-full h-full object-contain"
                alt="erickpjoshy-todolist"
              />
            </div>
            <div className="absolute top-0 w-full h-full my-works-hover-effect">
              <p className="justify-center flex items-center h-full w-full">
                <i className="fa-solid fa-link mr-2"></i>
                <a
                  className=""
                  href="https://toolmec.erickpjoshy.cloud/"
                  target="_blank"
                >
                  Visit Toolmec E-commerce
                </a>
              </p>
            </div>
          </div>
          <div className="img-container relative my-works-hover">
            <div className="opa">
              <img
                src="/elbuilders.png"
                className="w-full h-full object-contain"
                alt="erickpjoshy-elbuilders"
              />
            </div>
            <div className="absolute top-0 w-full h-full my-works-hover-effect">
              <p className="justify-center flex items-center h-full w-full">
                <i className="fa-solid fa-link mr-2"></i>
                <a
                  className=""
                  href="https://amal-davis.github.io/elite_final/"
                  target="_blank"
                >
                  Visit Elite Builders
                </a>
              </p>
            </div>
          </div>
          <div className="img-container relative my-works-hover">
            <div className="opa">
              <img
                src="/evently.png"
                className="w-full h-full object-contain"
                alt="erickpjoshy-todolist"
              />
            </div>
            <div className="absolute top-0 w-full h-full my-works-hover-effect">
              <p className="justify-center flex items-center h-full w-full">
                <i className="fa-solid fa-link mr-2"></i>
                <a
                  className=""
                  href="https://evently.erickpjoshy.cloud/"
                  target="_blank"
                >
                  Visit Toolmec Evently Platform
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
