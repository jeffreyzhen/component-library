import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledInput = styled.input``;

const StyledLabel = styled.label``;

export const InputRadio = ({
  id,
  name,
  value,
  children,
  onChange,
  activeSelection,
  ...props
}) => {
  return (
    <StyledLabel htmlFor={id}>
      <StyledInput
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        checked={activeSelection === value}
        {...props}
      />
      {children}
    </StyledLabel>
  );
};

InputRadio.defaultProps = {
  activeSelection: '',
  onChange: () => {},
};

InputRadio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  activeSelection: PropTypes.string,
};

export default InputRadio;
