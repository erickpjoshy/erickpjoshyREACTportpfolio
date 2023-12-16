import React from 'react';
import './about.scss';

const About = () => {
  return (
    <div className="s2bg">
      <div className="section-start px-4 sm:px-24">
        <div className="sectiontitle">
          <h2>ABOUT</h2>
          <p>Learn more about me</p>
        </div>
        <div className="row flex flex-wrap">
          <div className="imagesec mt-4">
            <img src="./erick6.jpg"></img>
          </div>
          <div className="pl-0 sm:pl-8 contentsec mt-4">
            <h3>FULL STACK DEVELOPER</h3>
            <p className="italic">
              I'm a fullstack developer with no experiance focused on crafting
              clean user‑friendly experiences, &amp; I am passionate about
              building excellent websites that improves the lives of those
              around me.
            </p>
            <div className="row mt-6 flex flex-wrap">
              <div className="w-full md:w-6/12">
                <ul>
                  <li>
                    <i className="fa-solid fa-chevron-right icon"></i>
                    <strong className="mx-4">Phone:</strong>
                    <span>+91 6282634660</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-chevron-right icon"></i>
                    <strong className="mx-4">Location:</strong>
                    <span>Thrissur,Kerala</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-6/12">
                <ul>
                  <li>
                    <i className="fa-solid fa-chevron-right icon"></i>
                    <strong className="mx-4">Email:</strong>
                    <span>erickpjoshy@gmail.com</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-chevron-right icon"></i>
                    <strong className="mx-4">Freelance:</strong>
                    <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-6">
              Skilled at writing well-designed, testable and efficient code
              using current best practices in Web development. Fast learner,
              hard worker and team player who is proficient in an array of
              scripting languages and multimedia Web tools.
            </p>
          </div>
        </div>
        <div className="row mt-16">
          <div className="sectiontitle">
            <h2>SKILLS</h2>
          </div>
          <div className="row flex flex-wrap">
            {/* ----------------skillcoulmnOne----------------- */}
            <div className="w-full md:w-6/12 pr-8">
              <div>
                <span className="skill">
                  HTML <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar w-full" role="progressbar"></div>
                </div>
              </div>
              <div>
                <span className="skill">
                  Boootstrap <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar w-11/12"
                    role="progressbar"
                  ></div>
                </div>
              </div>
              <div>
                <span className="skill">
                  FIGMA <i className="val">50%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar w-6/12" role="progressbar"></div>
                </div>
              </div>
              <div>
                <span className="skill">
                  Framer Motion <i className="val">50%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar w-6/12" role="progressbar"></div>
                </div>
              </div>
              <div>
                <span className="skill">
                  Angular JS <i className="val">60%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar w-3/5" role="progressbar"></div>
                </div>
              </div>
              <div>
                <span className="skill">
                  Microsoft SQL <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar w-4/5" role="progressbar"></div>
                </div>
              </div>
              <div>
                <span className="skill">
                  C# <i className="val">60%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar w-3/5" role="progressbar"></div>
                </div>
              </div>
            </div>

            {/* ----------------skillcoulmnTwo----------------- */}
            <div className="w-full md:w-6/12 pr-8">
              <div>
                <span className="skill">
                  CSS <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar w-11/12"
                    role="progressbar"
                  ></div>
                </div>
              </div>
              <div>
                <span className="skill">
                  Tailwind <i className="val">60%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar w-3/5" role="progressbar"></div>
                </div>
              </div>
              <div>
                <span className="skill">
                  Java Script <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar w-4/5" role="progressbar"></div>
                </div>
              </div>
              <div>
                <span className="skill">
                  React JS <i className="val">60%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar w-3/5" role="progressbar"></div>
                </div>
              </div>
              <div>
                <span className="skill">
                  Node JS <i className="val">Exploring</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar w-0" role="progressbar"></div>
                </div>
              </div>
              <div>
                <span className="skill">
                  Mongo DB <i className="val">Exploring</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar w-0" role="progressbar"></div>
                </div>
              </div>
              <div>
                <span className="skill">
                  Express JS <i className="val">Exploring</i>
                </span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar w-0" role="progressbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------intrests-------------------- */}
        <div className="sectiontitle mt-16">
          <h2>intrests</h2>
        </div>
        <div className="row flex flex-wrap w-full justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4">
            <div className="intrestcontainer">
              <i className="fa-solid fa-code text-yellow-600"></i>
              <h3>Coding</h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <div className="intrestcontainer">
              <i className="fa-solid fa-palette text-blue-700"></i>
              <h3>Drawing</h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <div className="intrestcontainer">
              <i className="fa-solid fa-music text-lime-400"></i>
              <h3>Music</h3>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <div className="intrestcontainer">
              <i className="fa-brands fa-youtube text-pink-500"></i>
              <h3>Youtube</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
