import React from 'react';
import { Container } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <Container>
        <div className="hero-content">
          <h1 className="mb-3" data-aos="fade-right">Helping You Get Justice After an Accident</h1>
          <h4 className="mb-4" data-aos="fade-right" data-aos-delay="200">
            Expert legal assistance for road traffic accident claims across the UK
          </h4>
          <a 
            href="#form" 
            className="btn btn-primary btn-cta" 
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            Request Free Consultation
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;