import React from 'react';

import PropTypes from 'prop-types';

import './button.css';
import { useNavigate } from 'react-router-dom';

/** Primary UI component for user interaction */
export const Button = ({
  primary = true,
  backgroundColor = backgroundColor,
  size = 'medium',
  label,
  ...props
}) => {
  let navigate=useNavigate()
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const handleaddToCart = () => {
   navigate('/cart')
  };
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
      onClick={handleaddToCart}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};
