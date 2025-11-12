import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaDirections } from 'react-icons/fa';

const ContactStrip = () => {
  return (
    <footer className="mt-5" id="contact">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col lg={8} className="text-center">
            <h3 className="mb-4" data-aos="fade-up">Still have questions? We're just a call away.</h3>
          </Col>
        </Row>
        
        <Row className="g-4">
          {/* Phone */}
          <Col xs={12} md={4} className="text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-method">
              <FaPhoneAlt size={32} />
              <h4>Phone</h4>
              <p><a href="tel:+447949452171" className="text-white">+44 7949 452171</a></p>
            </div>
          </Col>
          
          {/* WhatsApp */}
          <Col md={4} className="text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="contact-method">
              <FaWhatsapp size={32} />
              <h4>WhatsApp</h4>
              <p>
                <a 
                  href="https://wa.me/447949452171" 
                  className="text-white" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Chat with us
                </a>
              </p>
            </div>
          </Col>
          
          {/* Email */}
          <Col md={4} className="text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="contact-method">
              <FaEnvelope size={32} />
              <h4>Email</h4>
              <p>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=Shahabbinzafar13@gmail.com" 
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  shahab@novaclaims.co.uk
                </a>
              </p>
            </div>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col xs={12}>
            <div className="location-simple bg-white text-dark rounded-4 shadow-sm" data-aos="fade-up">
              <Row className="g-0">
                <Col lg={6}>
                  <div className="location-map">
                    <iframe
                      src="https://maps.google.com/maps?q=NovaClaims%20Accident%20Management%20Ltd%20BB11%201HJ&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="NovaClaims Accident Management Ltd Location"
                    ></iframe>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="location-details">
                    <span className="badge bg-primary-subtle text-primary fw-semibold mb-3">Visit Our Office</span>
                    <h4 className="fw-bold mb-2">NovaClaims Accident Management Ltd</h4>
                    <ul className="list-unstyled mb-4">
                      <li>Unit 4, 27 Kingsway Business Centre</li>
                      <li>Kingsway, Burnley</li>
                      <li>Lancashire</li>
                      <li>BB11 1HJ</li>
                    </ul>
                    <div className="d-flex gap-3 flex-wrap">
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=NovaClaims+Accident+Management+Ltd+BB11+1HJ"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaDirections className="me-2" /> Get Directions
                      </a>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=Shahabbinzafar13@gmail.com"
                        className="btn btn-outline-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaEnvelope className="me-2" /> Email Us
                      </a>
                    </div>
                    <div className="d-flex align-items-center gap-2 mt-4 text-muted">
                      <FaMapMarkerAlt />
                      <small>Located inside Kingsway Business Centre — parking available on request.</small>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        
        <Row className="mt-4">
          <Col xs={12} className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Nova Accident claim. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default ContactStrip;