import React from 'react';
import Button from '../Button';
import Text from '../Text';

const groupStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  padding: '1.6rem',
  borderTop: '0.1rem solid gray',
  borderBottom: '0.1rem solid gray',
  marginBottom: '1.6rem'
}

const TextWithButton = ({ text, buttonText = 'Proceed', onClick }) => (
  <div style={groupStyle}>
    <Text>{text}</Text>
    <Button onClick={onClick}>{buttonText}</Button>
  </div>
);

TextWithButton.propTypes = {
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default TextWithButton;