import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledError = styled.div`
  color: red;
`;

export const InputError = ({ children }) => (
  <StyledError data-testid="input-error">
    <p>{children}</p>
  </StyledError>
);

InputError.propTypes = {
  children: PropTypes.string.isRequired,
};

export default InputError;
