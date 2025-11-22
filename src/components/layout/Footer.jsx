import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import theme from '../../styles/theme';
import Button from '../common/Button';

// Styled components for the footer
const FooterContainer = styled.footer`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing[16]} 0 ${theme.spacing[8]};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${theme.colors.lightGray};
    opacity: 0.5;
  }
`;

const FooterInner = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 ${theme.spacing[4]};
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing[6]};
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 0 ${theme.spacing[8]};
  }
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[8]};
  margin-bottom: ${theme.spacing[12]};
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const FooterColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  font-family: ${theme.typography.headingFontFamily};
  font-size: ${theme.typography.fontSizes.xl};
  font-weight: ${theme.typography.fontWeights.bold};
  color: ${theme.colors.dejaVuBlue};
  letter-spacing: ${theme.typography.letterSpacing.wide};
  text-transform: uppercase;
  margin-bottom: ${theme.spacing[4]};
`;

const FooterDescription = styled.p`
  font-size: ${theme.typography.fontSizes.sm};
  line-height: ${theme.typography.lineHeights.relaxed};
  color: ${theme.colors.mediumGray};
  margin-bottom: ${theme.spacing[6]};
  max-width: 400px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
  margin-bottom: ${theme.spacing[6]};
`;

const SocialLink = styled(motion.a)`
  color: ${theme.colors.dejaVuBlue};
  font-size: ${theme.typography.fontSizes.lg};
  
  &:hover {
    color: ${theme.colors.sageGreen};
  }
`;

const FooterHeading = styled.h4`
  font-family: ${theme.typography.headingFontFamily};
  font-size: ${theme.typography.fontSizes.sm};
  font-weight: ${theme.typography.fontWeights.semibold};
  color: ${theme.colors.dejaVuBlue};
  text-transform: uppercase;
  letter-spacing: ${theme.typography.letterSpacing.wide};
  margin-bottom: ${theme.spacing[4]};
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const FooterNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterNavItem = styled.li`
  margin-bottom: ${theme.spacing[3]};
`;

const FooterNavLink = styled(Link)`
  font-family: ${theme.typography.bodyFontFamily};
  font-size: ${theme.typography.fontSizes.sm};
  color: ${theme.colors.mediumGray};
  text-decoration: none;
  transition: color 0.3s ease-out;
  
  &:hover {
    color: ${theme.colors.dejaVuBlue};
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
  margin-top: ${theme.spacing[2]};
`;

const NewsletterInput = styled.input`
  font-family: ${theme.typography.bodyFontFamily};
  font-size: ${theme.typography.fontSizes.sm};
  padding: ${theme.spacing[3]};
  border: 1px solid ${theme.colors.lightGray};
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.white};
  color: ${theme.colors.darkGray};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.dejaVuBlue};
  }
  
  &::placeholder {
    color: ${theme.colors.mediumGray};
  }
`;

const Copyright = styled.p`
  font-size: ${theme.typography.fontSizes.xs};
  color: ${theme.colors.mediumGray};
  margin: 0;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
  margin-top: ${theme.spacing[4]};
  
  @media (min-width: ${theme.breakpoints.md}) {
    margin-top: 0;
  }
`;

const FooterLink = styled(Link)`
  font-size: ${theme.typography.fontSizes.xs};
  color: ${theme.colors.mediumGray};
  text-decoration: none;
  
  &:hover {
    color: ${theme.colors.dejaVuBlue};
  }
`;

// Animation variants
const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const socialVariants = {
  hover: { 
    scale: 1.1,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    } 
  }
};

/**
 * Premium Footer Component for LasWell
 * 
 * Features:
 * - Brand information and description
 * - Navigation links organized by category
 * - Newsletter subscription
 * - Social media links
 * - Copyright and legal information
 */
const Footer = () => {
  // Mock function for newsletter submission
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    console.log('Newsletter subscription submitted');
  };
  
  return (
    <FooterContainer>
      <FooterInner>
        <FooterTop>
          <FooterColumn 
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={columnVariants}
          >
            <FooterLogo>LasWell</FooterLogo>
            <FooterDescription>
              Premium cotton apparel for the discerning modern man. 
              Crafted with exceptional attention to detail and a commitment to quality.
            </FooterDescription>
            
            <SocialLinks>
              <SocialLink 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover="hover"
                aria-label="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                </svg>
              </SocialLink>
              
              <SocialLink 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover="hover"
                aria-label="Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" fill="currentColor"/>
                </svg>
              </SocialLink>
              
              <SocialLink 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover="hover"
                aria-label="Twitter"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor"/>
                </svg>
              </SocialLink>
              
              <SocialLink 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover="hover"
                aria-label="Pinterest"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" fill="currentColor"/>
                </svg>
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={columnVariants}
          >
            <FooterHeading>Shop</FooterHeading>
            <FooterNav>
              <FooterNavList>
                <FooterNavItem>
                  <FooterNavLink to="/collection/new-arrivals">New Arrivals</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to="/collection/t-shirts">T-Shirts</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to="/collection/shirts">Shirts</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to="/collection/sweaters">Sweaters</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to="/collection/pants">Pants</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to="/collection/accessories">Accessories</FooterNavLink>
                </FooterNavItem>
              </FooterNavList>
            </FooterNav>
          </FooterColumn>
          
          <FooterColumn 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={columnVariants}
          >
            <FooterHeading>Company</FooterHeading>
            <FooterNav>
              <FooterNavList>
                <FooterNavItem>
                  <FooterNavLink to="/story">Our Story</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to="/sustainability">Sustainability</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to="/journal">Journal</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to="/stores">Stores</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to="/careers">Careers</FooterNavLink>
                </FooterNavItem>
                <FooterNavItem>
                  <FooterNavLink to="/contact">Contact Us</FooterNavLink>
                </FooterNavItem>
              </FooterNavList>
            </FooterNav>
          </FooterColumn>
          
          <FooterColumn 
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={columnVariants}
          >
            <FooterHeading>Newsletter</FooterHeading>
            <FooterDescription>
              Subscribe to receive updates, access to exclusive deals, and more.
            </FooterDescription>
            
            <NewsletterForm onSubmit={handleNewsletterSubmit}>
              <NewsletterInput 
                type="email" 
                placeholder="Your email address" 
                required 
              />
              <Button 
                buttonType={Button.TYPES.PRIMARY} 
                type="submit"
              >
                Subscribe
              </Button>
            </NewsletterForm>
          </FooterColumn>
        </FooterTop>
        
        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} LasWell. All rights reserved.
          </Copyright>
          
          <FooterLinks>
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
            <FooterLink to="/terms">Terms of Service</FooterLink>
            <FooterLink to="/shipping">Shipping & Returns</FooterLink>
          </FooterLinks>
        </FooterBottom>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;