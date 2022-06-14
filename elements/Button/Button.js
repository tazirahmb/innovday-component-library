import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Button = ({ children, className, ...rest }) => <button {...rest} className={styles['button-elem'] + ' ' + className} >{children}</button>;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
}

export default Button;