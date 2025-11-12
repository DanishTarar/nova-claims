import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaCarCrash, 
  FaUserInjured, 
  FaHandshake, 
  FaTachometerAlt 
} from 'react-icons/fa';

const InfoCards = () => {
  const cards = [
    {
      icon: <FaCarCrash />,
      title: "Accident Happens",
      text: "Even the safest drivers can be involved in accidents through no fault of their own."
    },
    {
      icon: <FaUserInjured />,
      title: "You're the Victim",
      text: "You shouldn't suffer physically or financially because of someone else's negligence."
    },
    {
      icon: <FaHandshake />,
      title: "We Connect You",
      text: "We'll match you with specialist solicitors who have proven success with claims like yours."
    },
    {
      icon: <FaTachometerAlt />,
      title: "Fast Processing",
      text: "We ensure your claim moves quickly through the system to get you the compensation you deserve."
    }
  ];

  return (
    <section className="container mb-5" id="services">
      <h2 className="text-center mb-5" data-aos="fade-up">How We Can Help You</h2>
      <Row className="g-4">
        {cards.map((card, index) => (
          <Col md={6} lg={3} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="info-card card h-100">
              <div className="card-body text-center p-4">
                <div className="icon">{card.icon}</div>
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default InfoCards;