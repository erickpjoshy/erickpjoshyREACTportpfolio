import React from 'react';
import './resume.scss';

const Resume = () => {
  return (
    <div className="s3bg">
      <div className="section-start px-4 sm:px-24">
        <div className="sectiontitle">
          <h2>Resume</h2>
          <p>CHECK MY RESUME</p>
          <a href="/assets/ERICKPJOSHYRESUME.pdf" download="">
            <button className="download-btn">Download Resume</button>
          </a>
        </div>
        {/* --------------------background---------------------------- */}
        <div className="row flex flex-wrap pb-8">
          <div className="w-full md:w-1/2">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Tech Mindz, Kochi</h4>
              <h5>Nov 2023 - Present</h5>
              <p>
                <em>MERN Stack</em>
              </p>
              <li>Self learning</li>
            </div>
            <div className="resume-item">
              <h4>GOVERMENT POLYTECNIC COLLAGE CHELAKKARA</h4>
              <h5>2021</h5>
              <p>
                <em>Diploma</em>
              </p>
              <li>
                Done my diploma in computer software and hardware engineering
              </li>
            </div>
            <div className="resume-item">
              <h4>ST Thomas Hss, vallachira</h4>
              <h5>2017</h5>
              <p>
                <em>Higher Secondary</em>
              </p>
              <li>Done my Higher Secondary in computer engineering</li>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Skien Software Lab</h4>
              <h5>2021 - SEP 2023</h5>
              <p>
                <em>Software engineer</em>
              </p>
              <li>1yrs above experiance in .NET Fullstack Developer</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
