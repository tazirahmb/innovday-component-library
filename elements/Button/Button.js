import React from 'react';
import PropTypes from 'prop-types';

const buttonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  border: 'none',
  padding: '1.6rem 8rem'
}

const Button = ({ children, style, ...rest }) => <button {...rest} style={{...buttonStyle, ...style}} >{children}</button>;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
}

export default Button;