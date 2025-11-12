import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    timePref: '',
    accidentDetails: '',
    gdprConsent: false
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate GDPR consent
    if (!formData.gdprConsent) {
      setModalMessage('Please consent to GDPR data processing to continue.');
      setShowModal(true);
      setIsSubmitting(false);
      return;
    }

    // Prepare template parameters
    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      timePref: formData.timePref,
      accidentDetails: formData.accidentDetails,
      gdprConsent: formData.gdprConsent ? 'Yes' : 'No',
      date: new Date().toLocaleString(),
      to_email: 'Shahabbinzafar13@gmail.com'
    };

    // Send email using EmailJS
    emailjs.send(
      'service_vnh5n0y',      // Your Service ID
      'template_g7fogjn',     // Your Template ID
      templateParams,
      'pmAy2q7sa1bFPeQGU'     // Your User ID
    )
    .then((response) => {
      setModalMessage('Thank you for your request! We will contact you within 24 hours.');
      setShowModal(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        timePref: '',
        accidentDetails: '',
        gdprConsent: false
      });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setModalMessage('Failed to send your request. Please call us directly at +44 7949 452171.');
      setShowModal(true);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section className="container mb-5" id="form" data-aos="fade-up">
      <Row className="justify-content-center">
        <Col lg={10}>
          <div className="contact-form">
            <h2 className="text-center mb-4">Request a Free Consultation Call</h2>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <div className="floating-label">
                    <Form.Control 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      placeholder=" " 
                      required 
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    <Form.Label htmlFor="fullName">Full Name *</Form.Label>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="floating-label">
                    <Form.Control 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder=" " 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <Form.Label htmlFor="email">Email Address *</Form.Label>
                  </div>
                </Col>
              </Row>
              
              <Row>
                <Col md={6}>
                  <div className="floating-label">
                    <Form.Control 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder=" " 
                      required 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <Form.Label htmlFor="phone">Phone Number *</Form.Label>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="floating-label">
                    <Form.Select 
                      id="timePref" 
                      name="timePref"
                      value={formData.timePref}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select a time...</option>
                      <option>Morning (9am-12pm)</option>
                      <option>Afternoon (12pm-5pm)</option>
                      <option>Evening (5pm-8pm)</option>
                    </Form.Select>
                    <Form.Label htmlFor="timePref">Preferred Time *</Form.Label>
                  </div>
                </Col>
              </Row>
              
              <div className="floating-label mb-4">
                <Form.Control 
                  as="textarea" 
                  id="accidentDetails" 
                  rows={4} 
                  placeholder=" " 
                  name="accidentDetails"
                  value={formData.accidentDetails}
                  onChange={handleChange}
                  required
                />
                <Form.Label htmlFor="accidentDetails">Accident Details *</Form.Label>
              </div>
              
              <Form.Check 
                type="checkbox" 
                id="gdprConsent" 
                name="gdprConsent"
                checked={formData.gdprConsent}
                onChange={handleChange}
                label={
                  <>
                    I consent to my personal data being processed in accordance with{' '}
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                      GDPR regulations
                    </a>.
                  </>
                }
                className="mb-4"
                required
              />
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  className="btn-success btn-lg px-5"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    'Submit Request'
                  )}
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>

      {/* Success/Error Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalMessage.includes('Failed') ? 'Error' : 'Thank You'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          {modalMessage.includes('Failed') && (
            <Button 
              variant="danger" 
              onClick={() => window.location.href = 'tel:+447949452171'}
            >
              <i className="fas fa-phone me-2"></i> Call Now
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default ConsultationForm;