import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  /* Reset and base styles */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.typography.bodyFontFamily};
    background-color: ${theme.colors.whiteDove};
    color: ${theme.colors.darkGray};
    line-height: ${theme.typography.lineHeights.base};
    font-weight: ${theme.typography.fontWeights.regular};
    overflow-x: hidden;
    min-height: 100vh;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.typography.headingFontFamily};
    color: ${theme.colors.dejaVuBlue};
    font-weight: ${theme.typography.fontWeights.bold};
    line-height: ${theme.typography.lineHeights.tight};
    margin-bottom: ${theme.spacing[4]};
    letter-spacing: ${theme.typography.letterSpacing.tight};
  }

  h1 {
    font-size: ${theme.typography.fontSizes['5xl']};
    margin-bottom: ${theme.spacing[6]};

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSizes['4xl']};
    }
  }

  h2 {
    font-size: ${theme.typography.fontSizes['4xl']};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSizes['3xl']};
    }
  }

  h3 {
    font-size: ${theme.typography.fontSizes['3xl']};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSizes['2xl']};
    }
  }

  h4 {
    font-size: ${theme.typography.fontSizes['2xl']};
  }

  h5 {
    font-size: ${theme.typography.fontSizes.xl};
  }

  h6 {
    font-size: ${theme.typography.fontSizes.lg};
  }

  p {
    font-size: ${theme.typography.fontSizes.base};
    margin-bottom: ${theme.spacing[4]};
    line-height: ${theme.typography.lineHeights.relaxed};
  }

  a {
    color: ${theme.colors.dejaVuBlue};
    text-decoration: none;
    transition: color ${theme.animation.durations.fast} ${theme.animation.easing.easeOut};
    
    &:hover {
      color: ${theme.colors.sageGreen};
    }
  }

  /* Button styles */
  button {
    font-family: ${theme.typography.uiFontFamily};
    border: none;
    cursor: pointer;
    background: none;
    font-size: ${theme.typography.fontSizes.base};
  }

  /* List styles */
  ul, ol {
    margin-bottom: ${theme.spacing[4]};
    padding-left: ${theme.spacing[6]};
  }

  li {
    margin-bottom: ${theme.spacing[2]};
  }

  /* Image styles */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Container for consistent width */
  .container {
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
  }

  /* Utility classes */
  .text-center {
    text-align: center;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  /* Animation utility classes */
  .fade-in {
    opacity: 0;
    animation: fadeIn ${theme.animation.durations.medium} ${theme.animation.easing.easeOut} forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Prevent FOUC (Flash of Unstyled Content) */
  .js-loading {
    visibility: hidden;
  }
`;

export default GlobalStyles;