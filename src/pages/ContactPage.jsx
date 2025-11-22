import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../components/common/Button';
import theme from '../styles/theme';

// Styled Components
const PageContainer = styled.div`
  padding-top: ${theme.spacing[16]};
`;

const HeroSection = styled.section`
  background-color: ${theme.colors.whiteDove};
  padding: ${theme.spacing[16]} ${theme.spacing[4]};
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[20]} ${theme.spacing[8]};
  }
`;

const HeroContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  text-align: center;
`;

const PageTitle = styled(motion.h1)`
  margin-bottom: ${theme.spacing[6]};
  font-size: clamp(${theme.typography.fontSizes['3xl']}, 5vw, ${theme.typography.fontSizes['5xl']});
`;

const PageDescription = styled(motion.p)`
  max-width: 800px;
  margin: 0 auto ${theme.spacing[8]};
  font-size: ${theme.typography.fontSizes.lg};
  color: ${theme.colors.mediumGray};
  line-height: ${theme.typography.lineHeights.relaxed};
`;

const ContactSection = styled.section`
  padding: ${theme.spacing[16]} ${theme.spacing[4]};
  background-color: ${theme.colors.white};
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[20]} ${theme.spacing[8]};
  }
`;

const ContactContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[12]};
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing[16]};
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[6]};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
`;

const Label = styled.label`
  font-family: ${theme.typography.uiFontFamily};
  font-size: ${theme.typography.fontSizes.sm};
  font-weight: ${theme.typography.fontWeights.medium};
  color: ${theme.colors.darkGray};
  text-transform: uppercase;
  letter-spacing: ${theme.typography.letterSpacing.wide};
`;

const Input = styled.input`
  padding: ${theme.spacing[4]};
  border: 1px solid ${theme.colors.lightGray};
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.typography.bodyFontFamily};
  font-size: ${theme.typography.fontSizes.base};
  transition: border-color 0.3s ${theme.animation.easing.easeOut};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.dejaVuBlue};
  }
`;

const Textarea = styled.textarea`
  padding: ${theme.spacing[4]};
  border: 1px solid ${theme.colors.lightGray};
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.typography.bodyFontFamily};
  font-size: ${theme.typography.fontSizes.base};
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ${theme.animation.easing.easeOut};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.dejaVuBlue};
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[8]};
`;

const InfoTitle = styled.h3`
  font-size: ${theme.typography.fontSizes['2xl']};
  margin-bottom: ${theme.spacing[6]};
  color: ${theme.colors.dejaVuBlue};
`;

const InfoItem = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
  margin-bottom: ${theme.spacing[6]};
`;

const InfoIcon = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${theme.colors.whiteDove};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.dejaVuBlue};
  font-size: ${theme.typography.fontSizes.xl};
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoLabel = styled.h4`
  font-size: ${theme.typography.fontSizes.md};
  margin-bottom: ${theme.spacing[2]};
  color: ${theme.colors.darkGray};
`;

const InfoText = styled.p`
  color: ${theme.colors.mediumGray};
  line-height: ${theme.typography.lineHeights.relaxed};
`;

const MapContainer = styled(motion.div)`
  margin-top: ${theme.spacing[8]};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
  height: 400px;
  background-color: ${theme.colors.whiteDove};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.mediumGray};
  font-style: italic;
`;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message
    alert('Thank you for your message. We will get back to you shortly.');
  };
  
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <PageContainer>
      <HeroSection ref={heroRef}>
        <HeroContent>
          <PageTitle
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            Contact Us
          </PageTitle>
          <PageDescription
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            We'd love to hear from you. Whether you have a question about our products, custom orders, or anything else, our team is ready to assist you.
          </PageDescription>
        </HeroContent>
      </HeroSection>
      
      <ContactSection>
        <ContactContainer ref={contactRef}>
          <ContactForm
            onSubmit={handleSubmit}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <Button buttonType="primary" size="medium" type="submit">
              Send Message
            </Button>
          </ContactForm>
          
          <ContactInfo
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <InfoTitle>Get in Touch</InfoTitle>
            
            <InfoItem>
              <InfoIcon>📍</InfoIcon>
              <InfoContent>
                <InfoLabel>Visit Us</InfoLabel>
                <InfoText>
                  123 Premium Avenue<br />
                  New York, NY 10001<br />
                  United States
                </InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>📞</InfoIcon>
              <InfoContent>
                <InfoLabel>Call Us</InfoLabel>
                <InfoText>+1 (212) 555-7890</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>✉️</InfoIcon>
              <InfoContent>
                <InfoLabel>Email Us</InfoLabel>
                <InfoText>contact@laswell.com</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>⏱️</InfoIcon>
              <InfoContent>
                <InfoLabel>Business Hours</InfoLabel>
                <InfoText>
                  Monday - Friday: 9am - 6pm<br />
                  Saturday: 10am - 4pm<br />
                  Sunday: Closed
                </InfoText>
              </InfoContent>
            </InfoItem>
            
            <MapContainer
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              [Interactive Map Would Be Displayed Here]
            </MapContainer>
          </ContactInfo>
        </ContactContainer>
      </ContactSection>
    </PageContainer>
  );
};

export default ContactPage;