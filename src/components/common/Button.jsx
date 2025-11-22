import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../../styles/theme';

// Motion variants for button animations
const buttonVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: { 
      duration: 0.3, 
      ease: theme.animation.easing.fabricEaseOut 
    } 
  },
  tap: { 
    scale: 0.98,
    transition: { 
      duration: 0.1, 
      ease: theme.animation.easing.fabricEaseIn 
    } 
  },
};

// Button types with different styling
const BUTTON_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  OUTLINE: 'outline',
};

// Styled button component with premium styling
const StyledButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size }) => 
    size === 'large' ? `${theme.spacing[4]} ${theme.spacing[8]}` :
    size === 'small' ? `${theme.spacing[2]} ${theme.spacing[4]}` :
    `${theme.spacing[3]} ${theme.spacing[6]}`
  };
  font-family: ${theme.typography.uiFontFamily};
  font-weight: ${theme.typography.fontWeights.medium};
  font-size: ${({ size }) => 
    size === 'large' ? theme.typography.fontSizes.lg :
    size === 'small' ? theme.typography.fontSizes.sm :
    theme.typography.fontSizes.base
  };
  letter-spacing: ${theme.typography.letterSpacing.wide};
  border-radius: ${({ rounded }) => rounded ? theme.borderRadius.full : theme.borderRadius.md};
  cursor: pointer;
  transition: all ${theme.animation.durations.medium} ${theme.animation.easing.fabricEaseOut};
  position: relative;
  overflow: hidden;
  text-transform: ${({ uppercase }) => uppercase ? 'uppercase' : 'none'};
  
  /* Button type styles */
  ${({ buttonType }) => {
    switch(buttonType) {
      case BUTTON_TYPES.PRIMARY:
        return `
          background-color: ${theme.colors.dejaVuBlue};
          color: ${theme.colors.white};
          border: none;
          box-shadow: ${theme.shadows.md};
          
          &:hover {
            background-color: ${theme.colors.dejaVuBlue};
            box-shadow: ${theme.shadows.lg};
          }
        `;
      case BUTTON_TYPES.SECONDARY:
        return `
          background-color: ${theme.colors.sageGreen};
          color: ${theme.colors.white};
          border: none;
          
          &:hover {
            background-color: ${theme.colors.oliveGreen};
          }
        `;
      case BUTTON_TYPES.TERTIARY:
        return `
          background-color: transparent;
          color: ${theme.colors.dejaVuBlue};
          border: none;
          padding-left: 0;
          padding-right: 0;
          
          &:hover {
            color: ${theme.colors.sageGreen};
          }
          
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 1px;
            background-color: currentColor;
            transition: width ${theme.animation.durations.medium} ${theme.animation.easing.fabricEaseOut};
          }
          
          &:hover::after {
            width: 100%;
          }
        `;
      case BUTTON_TYPES.OUTLINE:
        return `
          background-color: transparent;
          color: ${theme.colors.dejaVuBlue};
          border: 1px solid ${theme.colors.dejaVuBlue};
          
          &:hover {
            background-color: ${theme.colors.dejaVuBlue}10;
          }
        `;
      default:
        return `
          background-color: ${theme.colors.dejaVuBlue};
          color: ${theme.colors.white};
          border: none;
        `;
    }
  }}
  
  /* Disabled state */
  ${({ disabled }) => disabled && `
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  `}
  
  /* Icon positioning */
  .icon-left {
    margin-right: ${theme.spacing[2]};
  }
  
  .icon-right {
    margin-left: ${theme.spacing[2]};
  }
  
  /* Ripple effect for tactile feedback */
  .ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    background-color: rgba(255, 255, 255, 0.3);
    animation: ripple 0.6s ${theme.animation.easing.fabricEaseOut};
  }
  
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

/**
 * Premium Button Component for LasWell
 * 
 * @param {Object} props - Component props
 * @param {string} [props.buttonType='primary'] - Button type (primary, secondary, tertiary, outline)
 * @param {string} [props.size='medium'] - Button size (small, medium, large)
 * @param {boolean} [props.rounded=false] - Whether the button has fully rounded corners
 * @param {boolean} [props.uppercase=false] - Whether the button text is uppercase
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @param {React.ReactNode} [props.leftIcon] - Icon to display on the left side of the button
 * @param {React.ReactNode} [props.rightIcon] - Icon to display on the right side of the button
 * @param {Function} [props.onClick] - Click handler function
 * @param {string} [props.className] - Additional CSS class names
 * @param {React.ReactNode} props.children - Button content
 */
const Button = ({
  buttonType = BUTTON_TYPES.PRIMARY,
  size = 'medium',
  rounded = false,
  uppercase = false,
  disabled = false,
  leftIcon,
  rightIcon,
  onClick,
  className,
  children,
  ...rest
}) => {
  // Create ripple effect on click
  const createRipple = (event) => {
    if (disabled) return;
    
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = 'ripple';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
    
    if (onClick) onClick(event);
  };

  return (
    <StyledButton
      className={className}
      buttonType={buttonType}
      size={size}
      rounded={rounded}
      uppercase={uppercase}
      disabled={disabled}
      onClick={createRipple}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      {...rest}
    >
      {leftIcon && <span className="icon-left">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="icon-right">{rightIcon}</span>}
    </StyledButton>
  );
};

// Export button types for external use
Button.TYPES = BUTTON_TYPES;

export default Button;