import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const CeoProfile = () => {
  return (
    <section className="ceo-overlap" id="about">
      <Container>
        <Card className="ceo-card shadow-lg" data-aos="fade-up">
          <Row className="align-items-center">
            <Col md={4} className="text-center mb-3 mb-md-0">
              <img
                src="/assets/shahab.jpg"
                alt="CEO Lawyer Profile"
                className="img-fluid rounded-circle shadow"
                style={{ maxHeight: '250px', objectFit: 'cover' }}
              />
            </Col>
            <Col md={8}>
              <h3 className="fw-bold mb-1">Mr. Shahab Zafar</h3>
              <h6 className="text-info mb-3">CEO & Claims Referral Specialist</h6>
              <p>
                With over 15 years of experience in accident claims referrals, Shahab has helped thousands of clients
                get the justice they deserve. His extensive network of solicitors ensures you get the best
                representation possible.
              </p>
            </Col>
          </Row>
        </Card>
      </Container>
    </section>
  );
};

export default CeoProfile;
