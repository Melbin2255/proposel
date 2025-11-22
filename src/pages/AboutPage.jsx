import React from 'react';
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

const Section = styled.section`
  padding: ${theme.spacing[16]} ${theme.spacing[4]};
  background-color: ${props => props.bgColor || theme.colors.white};
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[20]} ${theme.spacing[8]};
  }
`;

const SectionContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[8]};
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: ${props => props.reversed ? '1fr 1fr' : '1fr 1fr'};
    gap: ${theme.spacing[16]};
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: ${props => props.reversed ? 2 : 1};
  
  @media (min-width: ${theme.breakpoints.lg}) {
    order: ${props => props.reversed ? 2 : 1};
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  order: ${props => props.reversed ? 1 : 2};
  
  @media (min-width: ${theme.breakpoints.lg}) {
    order: ${props => props.reversed ? 1 : 2};
  }
`;

const SectionImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.lg};
`;

const SectionTitle = styled(motion.h2)`
  margin-bottom: ${theme.spacing[6]};
  font-size: clamp(${theme.typography.fontSizes['2xl']}, 4vw, ${theme.typography.fontSizes['4xl']});
  text-align: ${props => props.centered ? 'center' : 'left'};
`;

const SectionText = styled(motion.p)`
  margin-bottom: ${theme.spacing[6]};
  font-size: ${theme.typography.fontSizes.md};
  line-height: ${theme.typography.lineHeights.relaxed};
  color: ${theme.colors.mediumGray};
`;

const ValuesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[8]};
  margin-top: ${theme.spacing[12]};
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ValueCard = styled(motion.div)`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing[8]};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  text-align: center;
`;

const ValueIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto ${theme.spacing[6]};
  background-color: ${theme.colors.whiteDove};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.dejaVuBlue};
  font-size: ${theme.typography.fontSizes['3xl']};
`;

const ValueTitle = styled.h3`
  font-size: ${theme.typography.fontSizes.xl};
  margin-bottom: ${theme.spacing[4]};
  color: ${theme.colors.dejaVuBlue};
`;

const ValueDescription = styled.p`
  color: ${theme.colors.mediumGray};
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const AboutPage = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [craftRef, craftInView] = useInView({
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
            Our Story
          </PageTitle>
          <PageDescription
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            LasWell was founded with a singular vision: to create premium cotton essentials that embody understated elegance and exceptional quality for the modern man.
          </PageDescription>
        </HeroContent>
      </HeroSection>
      
      <Section>
        <SectionContent ref={storyRef}>
          <TextContainer>
            <SectionTitle
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              variants={fadeInRight}
            >
              The LasWell Journey
            </SectionTitle>
            <SectionText
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              variants={fadeInRight}
            >
              Founded in 2018, LasWell began with a simple observation: the modern man deserved better essentials. Our founder, James Laswell, noticed a gap in the market for premium cotton apparel that balanced luxury with everyday wearability.
            </SectionText>
            <SectionText
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              variants={fadeInRight}
            >
              After years in the textile industry, James assembled a team of craftspeople who shared his passion for quality and attention to detail. Together, they developed a collection that would redefine cotton essentials through meticulous material selection and thoughtful design.
            </SectionText>
          </TextContainer>
          <ImageContainer
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <SectionImage src="/images/product-1.jpg" alt="LasWell founder in the workshop" />
          </ImageContainer>
        </SectionContent>
      </Section>
      
      <Section bgColor={theme.colors.whiteDove} ref={valuesRef}>
        <SectionContent>
          <SectionTitle 
            centered 
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={fadeInUp}
            style={{ gridColumn: '1 / -1' }}
          >
            Our Core Values
          </SectionTitle>
          <ValuesContainer
            as={motion.div}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            style={{ gridColumn: '1 / -1' }}
          >
            <ValueCard variants={fadeInUp}>
              <ValueIcon>Q</ValueIcon>
              <ValueTitle>Quality</ValueTitle>
              <ValueDescription>
                We source the finest long-staple cotton and employ rigorous quality control at every stage of production.
              </ValueDescription>
            </ValueCard>
            <ValueCard variants={fadeInUp}>
              <ValueIcon>S</ValueIcon>
              <ValueTitle>Sustainability</ValueTitle>
              <ValueDescription>
                Our commitment to ethical manufacturing and sustainable practices guides every decision we make.
              </ValueDescription>
            </ValueCard>
            <ValueCard variants={fadeInUp}>
              <ValueIcon>E</ValueIcon>
              <ValueTitle>Elegance</ValueTitle>
              <ValueDescription>
                We believe in understated sophistication—designs that are timeless rather than trendy.
              </ValueDescription>
            </ValueCard>
          </ValuesContainer>
        </SectionContent>
      </Section>
      
      <Section ref={craftRef}>
        <SectionContent reversed>
          <TextContainer reversed>
            <SectionTitle
              initial="hidden"
              animate={craftInView ? "visible" : "hidden"}
              variants={fadeInLeft}
            >
              Our Craft
            </SectionTitle>
            <SectionText
              initial="hidden"
              animate={craftInView ? "visible" : "hidden"}
              variants={fadeInLeft}
            >
              Each LasWell piece begins with premium cotton, carefully selected for its exceptional quality and feel. Our fabrics undergo rigorous testing to ensure they meet our exacting standards for comfort, durability, and appearance.
            </SectionText>
            <SectionText
              initial="hidden"
              animate={craftInView ? "visible" : "hidden"}
              variants={fadeInLeft}
            >
              Our skilled artisans then transform these materials into garments using techniques refined over generations. We focus on clean lines, perfect fits, and subtle details that elevate each piece from ordinary to extraordinary.
            </SectionText>
            <motion.div
              initial="hidden"
              animate={craftInView ? "visible" : "hidden"}
              variants={fadeInLeft}
            >
              <Button buttonType="primary" size="medium">
                Explore Our Collection
              </Button>
            </motion.div>
          </TextContainer>
          <ImageContainer 
            reversed
            initial="hidden"
            animate={craftInView ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <SectionImage src="/images/product-2.jpg" alt="Craftsman working on LasWell garment" />
          </ImageContainer>
        </SectionContent>
      </Section>
    </PageContainer>
  );
};

export default AboutPage;