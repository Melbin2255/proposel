import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Button from '../components/common/Button';
import theme from '../styles/theme';

// Hero Section Styled Components
const HeroSection = styled.section`
  height: 100vh;
  min-height: 800px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: ${theme.colors.whiteDove};
  padding: 0 ${theme.spacing[4]};
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing[8]};
  }
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[8]};
  z-index: 2;
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing[16]};
  }
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
`;

const HeroHeading = styled(motion.h1)`
  font-size: clamp(${theme.typography.fontSizes['3xl']}, 5vw, ${theme.typography.fontSizes['6xl']});
  margin-bottom: ${theme.spacing[6]};
  line-height: 1.1;
  color: ${theme.colors.dejaVuBlue};
`;

const HeroSubheading = styled(motion.p)`
  font-size: ${theme.typography.fontSizes.xl};
  margin-bottom: ${theme.spacing[8]};
  line-height: ${theme.typography.lineHeights.relaxed};
  color: ${theme.colors.mediumGray};
  max-width: 500px;
`;

const HeroImageContainer = styled(motion.div)`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroImage = styled(motion.img)`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.xl};
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: -10%;
    right: -5%;
    width: 40%;
    height: 70%;
    background-color: ${theme.colors.sageGreen};
    opacity: 0.05;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10%;
    left: -5%;
    width: 35%;
    height: 60%;
    background-color: ${theme.colors.oliveGreen};
    opacity: 0.05;
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
  }
`;

// Product Showcase Section
const ProductShowcaseSection = styled.section`
  padding: ${theme.spacing[20]} ${theme.spacing[4]};
  background-color: ${theme.colors.white};
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[24]} ${theme.spacing[8]};
  }
`;

const SectionHeading = styled(motion.h2)`
  text-align: center;
  margin-bottom: ${theme.spacing[16]};
  font-size: clamp(${theme.typography.fontSizes['2xl']}, 4vw, ${theme.typography.fontSizes['4xl']});
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[8]};
  max-width: 1440px;
  margin: 0 auto;
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProductCard = styled(motion.div)`
  background-color: ${theme.colors.whiteDove};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
  transition: transform 0.3s ease-out,
  box-shadow 0.3s ease-out;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const ProductContent = styled.div`
  padding: ${theme.spacing[6]};
`;

const ProductTitle = styled.h3`
  font-size: ${theme.typography.fontSizes.xl};
  margin-bottom: ${theme.spacing[2]};
`;

const ProductDescription = styled.p`
  color: ${theme.colors.mediumGray};
  margin-bottom: ${theme.spacing[4]};
`;

const ProductPrice = styled.p`
  font-family: ${theme.typography.headingFontFamily};
  font-weight: ${theme.typography.fontWeights.semibold};
  font-size: ${theme.typography.fontSizes.lg};
  color: ${theme.colors.dejaVuBlue};
  margin-bottom: ${theme.spacing[4]};
`;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
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

const HomePage = () => {
  const heroContainerRef = useRef(null);
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [showcaseRef, showcaseInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  // GSAP animations
  useGSAP(() => {
    const heroElements = heroContainerRef.current.querySelectorAll('.hero-element');
    if (heroElements.length > 0) {
      const heroTimeline = gsap.timeline();
      
      heroTimeline.from(heroElements, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      });
    }
  }, { scope: heroContainerRef });

  return (
    <>
      <HeroSection ref={heroContainerRef}>
        <HeroBackground />
        <HeroContent ref={heroRef}>
          <HeroTextContainer>
            <HeroHeading 
              className="hero-element"
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              Premium Cotton Essentials for the Modern Man
            </HeroHeading>
            <HeroSubheading 
              className="hero-element"
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              Elevate your everyday with our meticulously crafted cotton apparel, designed for comfort and understated elegance.
            </HeroSubheading>
            <motion.div 
              className="hero-element"
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <Button buttonType="primary" size="large">
                Shop Collection
              </Button>
            </motion.div>
          </HeroTextContainer>
          <HeroImageContainer
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <HeroImage 
              src="/images/hero-image.jpg" 
              alt="LasWell Premium Cotton Apparel"
              className="hero-element"
            />
          </HeroImageContainer>
        </HeroContent>
      </HeroSection>
      
      <ProductShowcaseSection ref={showcaseRef}>
        <SectionHeading
          initial="hidden"
          animate={showcaseInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          Our Premium Collection
        </SectionHeading>
        
        <ProductGrid
          as={motion.div}
          initial="hidden"
          animate={showcaseInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {products.map((product, index) => (
            <ProductCard key={index} variants={fadeInUp}>
              <ProductImage src={product.image} alt={product.title} />
              <ProductContent>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>${product.price}</ProductPrice>
                <Button buttonType="outline" size="medium">
                  View Details
                </Button>
              </ProductContent>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductShowcaseSection>
    </>
  );
};

// Sample product data
const products = [
  {
    title: "Premium Cotton Shirt",
    description: "Luxurious cotton shirt with a tailored fit and subtle texture.",
    price: "129.00",
    image: "/images/product-1.jpg"
  },
  {
    title: "Relaxed Fit Polo",
    description: "Soft, breathable cotton polo with a modern relaxed silhouette.",
    price: "89.00",
    image: "/images/product-2.jpg"
  },
  {
    title: "Structured Cotton Blazer",
    description: "Lightweight cotton blazer with a natural drape and minimal structure.",
    price: "249.00",
    image: "/images/product-3.jpg"
  },
  {
    title: "Tailored Cotton Trousers",
    description: "Refined cotton trousers with a clean line and perfect drape.",
    price: "159.00",
    image: "/images/product-4.jpg"
  },
  {
    title: "Textured Cotton Sweater",
    description: "Premium cotton sweater with subtle texture and clean lines.",
    price: "139.00",
    image: "/images/product-5.jpg"
  },
  {
    title: "Lightweight Cotton Jacket",
    description: "Versatile cotton jacket with minimal detailing and natural finish.",
    price: "219.00",
    image: "/images/product-6.jpg"
  }
];

export default HomePage;