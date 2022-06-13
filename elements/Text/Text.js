import React from 'react';

const Text = ({ children, ...rest }) => <p {...rest}>{children}</p>;

export default Text