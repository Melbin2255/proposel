import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Button from '../common/Button';
import theme from '../../styles/theme';

// Styled components for the collection showcase
const ShowcaseContainer = styled.section`
  padding: ${theme.spacing[20]} 0;
  background-color: ${theme.colors.white};
  position: relative;
  overflow: hidden;
`;

const ShowcaseInner = styled.div`
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

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing[16]};
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  margin-bottom: ${theme.spacing[4]};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing[3]};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background-color: ${theme.colors.dejaVuBlue};
  }
`;

const SectionDescription = styled(motion.p)`
  max-width: 600px;
  margin: 0 auto;
  color: ${theme.colors.mediumGray};
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${theme.spacing[6]};
  margin-bottom: ${theme.spacing[12]};
  
  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProductCard = styled(motion.div)`
  position: relative;
  border-radius: ${theme.borderRadius.md};
  overflow: hidden;
  background-color: ${theme.colors.whiteDove};
  height: 0;
  padding-bottom: 125%; /* Aspect ratio 4:5 */
  cursor: pointer;
`;

const ProductImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  transition: transform 0.6s ${theme.animation.easing.fabricEaseOut};
  
  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProductOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${theme.spacing[6]};
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
  color: ${theme.colors.white};
  transform: translateY(20px);
  opacity: 0;
  transition: transform 0.4s ${theme.animation.easing.fabricEaseOut}, opacity 0.4s ${theme.animation.easing.fabricEaseOut};
  
  ${ProductCard}:hover & {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ProductName = styled.h3`
  font-size: ${theme.typography.fontSizes.xl};
  margin-bottom: ${theme.spacing[2]};
  font-weight: ${theme.typography.fontWeights.semibold};
`;

const ProductPrice = styled.p`
  font-size: ${theme.typography.fontSizes.md};
  font-weight: ${theme.typography.fontWeights.medium};
  margin-bottom: ${theme.spacing[3]};
`;

const ProductTag = styled.span`
  position: absolute;
  top: ${theme.spacing[4]};
  right: ${theme.spacing[4]};
  background-color: ${theme.colors.oliveGreen};
  color: ${theme.colors.white};
  padding: ${theme.spacing[1]} ${theme.spacing[3]};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.typography.fontSizes.xs};
  font-weight: ${theme.typography.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: ${theme.typography.letterSpacing.wide};
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

// Animation variants
const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: theme.animation.easing.fabricEaseOut
    }
  }
};

const descriptionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: theme.animation.easing.fabricEaseOut
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1 * i,
      ease: theme.animation.easing.fabricEaseOut
    }
  })
};

/**
 * Collection Showcase Component for LasWell
 * 
 * Features:
 * - Animated product grid with staggered reveal
 * - Hover effects for product cards
 * - Responsive grid layout
 * - Premium styling aligned with brand identity
 */
const CollectionShowcase = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Premium Cotton Tee',
      price: '$85',
      image: '/images/product-1.jpg',
      tag: 'New Arrival'
    },
    {
      id: 2,
      name: 'Slim Fit Oxford Shirt',
      price: '$120',
      image: '/images/product-2.jpg'
    },
    {
      id: 3,
      name: 'Textured Cotton Sweater',
      price: '$145',
      image: '/images/product-3.jpg'
    },
    {
      id: 4,
      name: 'Cotton Chino Pants',
      price: '$135',
      image: '/images/product-4.jpg',
      tag: 'Best Seller'
    },
    {
      id: 5,
      name: 'Lightweight Polo',
      price: '$95',
      image: '/images/product-5.jpg'
    },
    {
      id: 6,
      name: 'Cotton Blend Jacket',
      price: '$225',
      image: '/images/product-6.jpg'
    }
  ];
  
  // GSAP animations
  useGSAP(() => {
    if (isInView) {
      gsap.from('.product-card', {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
      });
    }
  }, { scope: containerRef, dependencies: [isInView] });
  
  return (
    <ShowcaseContainer ref={containerRef}>
      <ShowcaseInner>
        <SectionHeader>
          <SectionTitle
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Featured Collection
          </SectionTitle>
          
          <SectionDescription
            variants={descriptionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Discover our premium cotton essentials, crafted with exceptional attention to detail and a commitment to quality.
          </SectionDescription>
        </SectionHeader>
        
        <ProductGrid>
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              className="product-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <ProductImage src={product.image} />
              {product.tag && <ProductTag>{product.tag}</ProductTag>}
              <ProductOverlay>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
                <Button 
                  buttonType={Button.TYPES.PRIMARY}
                  size="small"
                >
                  View Details
                </Button>
              </ProductOverlay>
            </ProductCard>
          ))}
        </ProductGrid>
        
        <ButtonWrapper>
          <Button 
            buttonType={Button.TYPES.OUTLINE}
            size="large"
            as={Link}
            to="/collection"
          >
            View All Collection
          </Button>
        </ButtonWrapper>
      </ShowcaseInner>
    </ShowcaseContainer>
  );
};

export default CollectionShowcase;