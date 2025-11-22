import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../common/Button';
import theme from '../../styles/theme';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Styled components for the hero section
const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  min-height: 700px;
  width: 100%;
  overflow: hidden;
  background-color: ${theme.colors.whiteDove};
`;

const HeroContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  padding: 0 ${theme.spacing[4]};
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing[8]};
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 0 ${theme.spacing[16]};
  }
`;

const HeroTextContainer = styled(motion.div)`
  max-width: 600px;
`;

const HeroHeading = styled(motion.h1)`
  color: ${theme.colors.dejaVuBlue};
  margin-bottom: ${theme.spacing[4]};
  font-size: clamp(${theme.typography.fontSizes['3xl']}, 5vw, ${theme.typography.fontSizes['6xl']});
  line-height: 1.1;
`;

const HeroSubheading = styled(motion.p)`
  color: ${theme.colors.darkGray};
  font-size: clamp(${theme.typography.fontSizes.md}, 2vw, ${theme.typography.fontSizes.xl});
  line-height: ${theme.typography.lineHeights.relaxed};
  margin-bottom: ${theme.spacing[8]};
  max-width: 500px;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing[4]};
  flex-wrap: wrap;
`;

const HeroImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  
  @media (max-width: ${theme.breakpoints.md}) {
    width: 100%;
    opacity: 0.3;
  }
`;

const HeroImage = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-image: url('/images/hero-image.jpg');
  background-size: cover;
  background-position: center;
  transform-origin: center;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${theme.spacing[8]};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.dejaVuBlue};
  font-size: ${theme.typography.fontSizes.xs};
  letter-spacing: ${theme.typography.letterSpacing.wide};
  text-transform: uppercase;
  z-index: 2;
`;

const ScrollLine = styled(motion.div)`
  width: 1px;
  height: 60px;
  background-color: ${theme.colors.dejaVuBlue};
  margin-top: ${theme.spacing[2]};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.dejaVuBlue};
    animation: scrollDown 2s ${theme.animation.easing.easeInOut} infinite;
  }
  
  @keyframes scrollDown {
    0% {
      transform: translateY(-100%);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

const AccentShape = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: ${theme.colors.sageGreen}10;
  filter: blur(80px);
  z-index: 1;
  opacity: 0.6;
`;

// Animation variants
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: custom => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * custom,
      duration: 0.8,
      ease: theme.animation.easing.fabricEaseOut
    }
  })
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 0.5,
      ease: theme.animation.easing.fabricEaseOut
    }
  }
};

const scrollIndicatorVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5
    }
  }
};

/**
 * Premium Hero Section Component for LasWell
 * 
 * Features:
 * - Sophisticated animations using GSAP and Framer Motion
 * - Parallax scrolling effects
 * - Dynamic text reveal animations
 * - Subtle background accents
 * - Responsive design for all screen sizes
 */
const HeroSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const accentRef1 = useRef(null);
  const accentRef2 = useRef(null);
  
  // Parallax scroll effect with Framer Motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  
  // GSAP animations
  useGSAP(() => {
    // Animate accent shapes
    gsap.to(accentRef1.current, {
      x: '10%',
      y: '5%',
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
    
    gsap.to(accentRef2.current, {
      x: '-15%',
      y: '-10%',
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
    
    // Create a timeline for text reveal
    const tl = gsap.timeline();
    
    tl.from('.hero-text-line', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: containerRef });
  
  return (
    <HeroContainer ref={containerRef}>
      {/* Accent shapes for visual interest */}
      <AccentShape 
        ref={accentRef1}
        initial={{ top: '20%', left: '10%' }}
      />
      <AccentShape 
        ref={accentRef2}
        initial={{ bottom: '30%', right: '20%' }}
        style={{ width: '400px', height: '400px', backgroundColor: `${theme.colors.dejaVuBlue}05` }}
      />
      
      {/* Hero content */}
      <HeroContent>
        <HeroTextContainer
          initial="hidden"
          animate="visible"
        >
          <HeroHeading 
            custom={0}
            variants={textVariants}
          >
            <span className="hero-text-line" style={{ display: 'block' }}>Premium Cotton</span>
            <span className="hero-text-line" style={{ display: 'block' }}>For The Modern Man</span>
          </HeroHeading>
          
          <HeroSubheading
            custom={1}
            variants={textVariants}
          >
            Experience the perfect blend of comfort, style, and sophistication with LasWell's premium cotton apparel.
          </HeroSubheading>
          
          <ButtonContainer
            variants={buttonVariants}
          >
            <Button 
              buttonType={Button.TYPES.PRIMARY}
              size="large"
            >
              Explore Collection
            </Button>
            
            <Button 
              buttonType={Button.TYPES.OUTLINE}
              size="large"
            >
              Our Story
            </Button>
          </ButtonContainer>
        </HeroTextContainer>
      </HeroContent>
      
      {/* Hero image with parallax effect */}
      <HeroImageContainer>
        <HeroImage 
          ref={imageRef}
          style={{ 
            scale: imageScale,
            y: imageY
          }}
        />
      </HeroImageContainer>
      
      {/* Scroll indicator */}
      <ScrollIndicator
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.span>
        <ScrollLine />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;