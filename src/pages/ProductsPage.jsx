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

const FilterSection = styled.section`
  padding: ${theme.spacing[8]} ${theme.spacing[4]};
  background-color: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.lightGray};
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[8]};
  }
`;

const FilterContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[4]};
  align-items: center;
  justify-content: space-between;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
`;

const FilterButton = styled.button`
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  background-color: ${({ active }) => active ? theme.colors.dejaVuBlue : 'transparent'};
  color: ${({ active }) => active ? theme.colors.white : theme.colors.dejaVuBlue};
  border: 1px solid ${theme.colors.dejaVuBlue};
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.typography.uiFontFamily};
  font-size: ${theme.typography.fontSizes.sm};
  font-weight: ${theme.typography.fontWeights.medium};
  transition: all 0.3s ease-out;
  
  &:hover {
    background-color: ${({ active }) => active ? theme.colors.dejaVuBlue : theme.colors.whiteDove};
  }
`;

const SortSelect = styled.select`
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border: 1px solid ${theme.colors.lightGray};
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.typography.uiFontFamily};
  font-size: ${theme.typography.fontSizes.sm};
  background-color: ${theme.colors.white};
  color: ${theme.colors.darkGray};
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.dejaVuBlue};
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[8]};
  padding: ${theme.spacing[8]} ${theme.spacing[4]};
  max-width: 1440px;
  margin: 0 auto;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
    padding: ${theme.spacing[12]} ${theme.spacing[8]};
  }
`;

const ProductCard = styled(motion.div)`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.sm};
  transition: transform 0.3s ease-out,
  box-shadow 0.3s ease-out;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.md};
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 400px;
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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${theme.spacing[8]} 0 ${theme.spacing[16]};
`;

const PaginationButton = styled.button`
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  margin: 0 ${theme.spacing[1]};
  background-color: ${({ active }) => active ? theme.colors.dejaVuBlue : theme.colors.white};
  color: ${({ active }) => active ? theme.colors.white : theme.colors.dejaVuBlue};
  border: 1px solid ${({ active }) => active ? theme.colors.dejaVuBlue : theme.colors.lightGray};
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.typography.uiFontFamily};
  font-size: ${theme.typography.fontSizes.sm};
  transition: all 0.3s ease-out;
  
  &:hover {
    background-color: ${({ active }) => active ? theme.colors.dejaVuBlue : theme.colors.whiteDove};
  }
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ProductsPage = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [productsRef, productsInView] = useInView({
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
            Our Premium Collection
          </PageTitle>
          <PageDescription
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            Discover our meticulously crafted cotton essentials, designed with a focus on quality, comfort, and understated elegance for the modern man.
          </PageDescription>
        </HeroContent>
      </HeroSection>
      
      <FilterSection>
        <FilterContainer>
          <FilterGroup>
            <FilterButton active>All</FilterButton>
            <FilterButton>Shirts</FilterButton>
            <FilterButton>Polos</FilterButton>
            <FilterButton>Trousers</FilterButton>
            <FilterButton>Outerwear</FilterButton>
          </FilterGroup>
          
          <SortSelect>
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </SortSelect>
        </FilterContainer>
      </FilterSection>
      
      <ProductsGrid
        as={motion.div}
        ref={productsRef}
        initial="hidden"
        animate={productsInView ? "visible" : "hidden"}
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
      </ProductsGrid>
      
      <PaginationContainer>
        <PaginationButton>Previous</PaginationButton>
        <PaginationButton active>1</PaginationButton>
        <PaginationButton>2</PaginationButton>
        <PaginationButton>3</PaginationButton>
        <PaginationButton>Next</PaginationButton>
      </PaginationContainer>
    </PageContainer>
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

export default ProductsPage;