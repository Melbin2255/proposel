import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import theme from '../../styles/theme';

// Styled components for the header
const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: ${theme.spacing[4]} 0;
  transition: background-color 0.3s ${theme.animation.easing.easeOut}, 
              padding 0.3s ${theme.animation.easing.easeOut};
  
  ${({ scrolled }) => scrolled && `
    background-color: ${theme.colors.white};
    padding: ${theme.spacing[2]} 0;
    box-shadow: ${theme.shadows.sm};
  `}
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const Logo = styled(motion.div)`
  font-family: ${theme.typography.headingFontFamily};
  font-size: ${theme.typography.fontSizes.xl};
  font-weight: ${theme.typography.fontWeights.bold};
  color: ${theme.colors.dejaVuBlue};
  letter-spacing: ${theme.typography.letterSpacing.wide};
  text-transform: uppercase;
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: none;
  
  @media (min-width: ${theme.breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 ${theme.spacing[4]};
`;

const NavLink = styled(motion.a)`
  font-family: ${theme.typography.uiFontFamily};
  font-size: ${theme.typography.fontSizes.sm};
  font-weight: ${theme.typography.fontWeights.medium};
  color: ${theme.colors.dejaVuBlue};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: ${theme.typography.letterSpacing.wide};
  padding: ${theme.spacing[2]} 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${theme.colors.dejaVuBlue};
    transition: width 0.3s ease-out;
  }
  
  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 110;
  
  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenuLine = styled(motion.span)`
  width: 100%;
  height: 2px;
  background-color: ${theme.colors.dejaVuBlue};
  transition: transform 0.3s ${theme.animation.easing.easeInOut}, 
              opacity 0.3s ${theme.animation.easing.easeInOut};
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.whiteDove};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 105;
  padding: ${theme.spacing[8]};
`;

const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const MobileNavItem = styled(motion.li)`
  margin: ${theme.spacing[6]} 0;
`;

const MobileNavLink = styled(Link)`
  font-family: ${theme.typography.headingFontFamily};
  font-size: ${theme.typography.fontSizes['2xl']};
  font-weight: ${theme.typography.fontWeights.semibold};
  color: ${theme.colors.dejaVuBlue};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: ${theme.typography.letterSpacing.wide};
`;

// Animation variants
const logoVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + (i * 0.1),
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const mobileNavItemVariants = {
  closed: { opacity: 0, y: 20 },
  open: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: "easeOut" 
    } 
  }
};

/**
 * Premium Header Component for LasWell
 * 
 * Features:
 * - Sophisticated animations on scroll and hover
 * - Responsive design with mobile menu
 * - Premium styling aligned with brand identity
 */
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/collection' },
    { name: 'Our Story', path: '/story' },
    { name: 'Journal', path: '/journal' },
    { name: 'Contact', path: '/contact' }
  ];
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  return (
    <HeaderContainer 
      scrolled={scrolled}
      initial="hidden"
      animate="visible"
    >
      <HeaderInner>
        <Logo 
          variants={logoVariants}
        >
          <Link to="/">LasWell</Link>
        </Logo>
        
        <Nav>
          <NavList>
            {navItems.map((item, index) => (
              <NavItem key={item.name}>
                <NavLink 
                  as={Link}
                  to={item.path}
                  custom={index}
                  variants={navItemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
          
          <Button 
            buttonType={Button.TYPES.PRIMARY}
            size="small"
            rounded
            style={{ marginLeft: theme.spacing[4] }}
          >
            Shop Now
          </Button>
        </Nav>
        
        <MobileMenuButton 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <MobileMenuLine 
            animate={{
              rotate: mobileMenuOpen ? 45 : 0,
              y: mobileMenuOpen ? 8 : 0
            }}
          />
          <MobileMenuLine 
            animate={{
              opacity: mobileMenuOpen ? 0 : 1
            }}
          />
          <MobileMenuLine 
            animate={{
              rotate: mobileMenuOpen ? -45 : 0,
              y: mobileMenuOpen ? -8 : 0
            }}
          />
        </MobileMenuButton>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <MobileMenu
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <MobileNavList>
                {navItems.map((item) => (
                  <MobileNavItem 
                    key={item.name}
                    variants={mobileNavItemVariants}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <MobileNavLink to={item.path}>
                      {item.name}
                    </MobileNavLink>
                  </MobileNavItem>
                ))}
              </MobileNavList>
              
              <Button 
                buttonType={Button.TYPES.PRIMARY}
                size="medium"
                rounded
                style={{ marginTop: theme.spacing[8] }}
              >
                Shop Now
              </Button>
            </MobileMenu>
          )}
        </AnimatePresence>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;