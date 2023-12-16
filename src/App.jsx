import './app.scss';
import Nav from './components/navbar/Nav';
import Hero from './components/Hero/Hero';
import About from './components/SectionTwo/About';
import Resume from './components/SectionThree/Resume';
import Services from './components/SectionFive/Services';
import PortFolio from './components/SectionSix/PortFolio';
import Contacts from './components/SectionSeven/Contacts';
const App = () => {
  return (
    <div>
      <div className="credits">Designed by Erick Jzz</div>
      <section className="clearfix" id="Home">
        <Nav />
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Resume">
        <Resume />
      </section>
      <section id="Serivces">
        <Services />
      </section>
      <section id="Portfolio">
        <PortFolio />
      </section>
      <section id="Contact">
        <Contacts />
      </section>
    </div>
  );
};

export default App;
