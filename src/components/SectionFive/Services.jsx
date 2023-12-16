import React from 'react';
import './services.scss';
const Services = () => {
  return (
    <div className="sec6bg">
      <div className="section-start px-4 sm:px-24">
        <div className="sectiontitle">
          <h2>SERVICES</h2>
          <p>WHAT CAN I DO FOR YOU?</p>
        </div>
        <div className="row flex flex-wrap pb-26">
          {/* ---------------card1-------------------- */}
          <div className="w-full lg:w-1/3  p-4">
            <div className="card p-4">
              <div className="icon">
                <i className="fa-solid fa-pen-nib"></i>
              </div>
              <h4>
                <a href="">Web Design</a>
              </h4>
              <p>
                Web designing is a kind of graphic design done for the
                development and styling of a particular object. The two
                important parts which complete a website is its visually
                attractive design and the font of the page. Creating a
                responsive design has a vital role to play in website designing
                as it has the right concept of building a website for every user
                device like mobile and web.
              </p>
            </div>
          </div>
          {/* ---------------card2--------------------- */}
          <div className="w-full lg:w-1/3 p-4">
            <div className="card p-4">
              <div className="icon">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <h4>
                <a href="">Web Development</a>
              </h4>
              <p>
                Web development refers to the building, creating, and
                maintaining of websites. It includes aspects such as web design,
                web publishing, web programming, and database management. It is
                the creation of an application that works over the internet i.e.
                websites.
              </p>
            </div>
          </div>
          {/* ---------------card3-------------------- */}
          <div className="w-full lg:w-1/3 p-4">
            <div className="card p-4">
              <div className="icon">
                <i className="fa-brands fa-figma"></i>
              </div>
              <h4>
                <a href="">Figma</a>
              </h4>
              <p>
                Figma is a web-based collaborative design tool that allows users
                to create and share designs, prototypes, and specifications. It
                is often used by designers, developers, and other team members
                to collaborate on the design of websites, mobile apps, and other
                digital products
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
