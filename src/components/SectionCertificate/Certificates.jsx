import React from 'react';
import './certificates.scss';

const Certificates = () => {
  return (
    <div className="sec5bg">
      <div className="section-start px-4 sm:px-24">
        <div className="sectiontitle">
          <h2>PORTFOLIO</h2>
          <p>MY CERTIFICATES</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 justify-center mt-10 gap-4">
          <div className="img-container">
            <img
              src="/erickskiencertificate.png"
              className="w-full h-full object-contain"
            />
            <p className="text-center">
              C# .NET Fullstack Developer EXP Certificate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
