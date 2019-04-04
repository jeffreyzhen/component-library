import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;

  :disabled {
    cursor: default;
  }
`;

export const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

Button.defaultProps = {
  children: '',
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
