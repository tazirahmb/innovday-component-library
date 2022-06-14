import React from 'react';
import PropTypes from 'prop-types';

const textStyle = {
  color: 'blue',
  fontSize: '1.8rem'
}

const Text = ({ children, style, ...rest }) => <p {...rest} style={{...textStyle, ...style}}>{children}</p>;

Text.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
}

export default Text;