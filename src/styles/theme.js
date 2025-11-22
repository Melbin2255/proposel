/**
 * LasWell Theme Configuration
 * 
 * This file defines the core design system for the LasWell premium website,
 * including colors, typography, spacing, and animation parameters.
 */

export const theme = {
  colors: {
    // Primary background - Warm white canvas (60%)
    whiteDove: '#EFEEE5',
    // Pure white for crispness and high-contrast accents (10%)
    white: '#FFFFFF',
    // Primary brand color for headings and CTAs (30%)
    dejaVuBlue: '#2E5283',
    // Subtle contrast, elegant hover states (6%)
    sageGreen: '#9BAA92',
    // Specific highlights and deep accents (4%)
    oliveGreen: '#636B2F',
    // Additional utility colors
    black: '#000000',
    darkGray: '#333333',
    mediumGray: '#666666',
    lightGray: '#CCCCCC',
  },
  
  typography: {
    // Heading fonts - Strong, clean, contemporary sans-serifs
    headingFontFamily: '"Montserrat", sans-serif',
    // Body text - Highly readable, clean sans-serifs
    bodyFontFamily: '"Open Sans", sans-serif',
    // UI elements and navigation
    uiFontFamily: '"Inter", sans-serif',
    
    // Font sizes
    fontSizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      md: '1.125rem',   // 18px
      lg: '1.25rem',    // 20px
      xl: '1.5rem',     // 24px
      '2xl': '1.875rem', // 30px
      '3xl': '2.25rem',  // 36px
      '4xl': '3rem',     // 48px
      '5xl': '3.75rem',  // 60px
      '6xl': '4.5rem',   // 72px
    },
    
    // Font weights
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    
    // Line heights
    lineHeights: {
      tight: 1.2,
      base: 1.5,
      relaxed: 1.75,
      loose: 2,
    },
    
    // Letter spacing
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  
  // Spacing system for consistent margins, paddings, and gaps
  spacing: {
    0: '0',
    1: '0.25rem',    // 4px
    2: '0.5rem',     // 8px
    3: '0.75rem',    // 12px
    4: '1rem',       // 16px
    5: '1.25rem',    // 20px
    6: '1.5rem',     // 24px
    8: '2rem',       // 32px
    10: '2.5rem',    // 40px
    12: '3rem',      // 48px
    16: '4rem',      // 64px
    20: '5rem',      // 80px
    24: '6rem',      // 96px
    32: '8rem',      // 128px
    40: '10rem',     // 160px
    48: '12rem',     // 192px
    56: '14rem',     // 224px
    64: '16rem',     // 256px
  },
  
  // Breakpoints for responsive design
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Animation parameters
  animation: {
    // Durations
    durations: {
      fast: '0.2s',
      medium: '0.4s',
      slow: '0.6s',
      verySlow: '1s',
    },
    // Easing functions for natural, fabric-like movement
    easing: {
      // Standard easing
      easeOut: 'cubic-bezier(0.33, 1, 0.68, 1)',
      easeIn: 'cubic-bezier(0.32, 0, 0.67, 0)',
      easeInOut: 'cubic-bezier(0.65, 0, 0.35, 1)',
      // Custom easing for fabric-like motion
      fabricEaseOut: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fabricEaseIn: 'cubic-bezier(0.4, 0, 0.2, 1)',
      fabricEaseInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Bounce effect for subtle emphasis
      bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
  },
  
  // Shadows for depth and elevation
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  
  // Border radiuses
  borderRadius: {
    none: '0',
    sm: '0.125rem',  // 2px
    md: '0.25rem',   // 4px
    lg: '0.5rem',    // 8px
    xl: '1rem',      // 16px
    full: '9999px',  // Fully rounded (circles)
  },
};

export default theme;