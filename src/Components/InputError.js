import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledError = styled.div`
  color: red;
`;

const Error = ({ children }) => (
  <StyledError>
    <p>{children}</p>
  </StyledError>
);

Error.propTypes = {
  children: PropTypes.string.isRequired,
};
