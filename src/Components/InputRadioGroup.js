import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { InputRadio } from './InputRadio';

const StyledDiv = styled.div`
  display: flex;
`;

export const InputRadioGroup = ({ children, ...props }) => {
  const [activeSelection, setActiveSelection] = useState('');

  const handleChange = event => {
    setActiveSelection(event.target.value);
  };

  return (
    <StyledDiv {...props}>
      {children.map(radio => (
        <InputRadio
          key={radio.id}
          onChange={handleChange}
          activeSelection={activeSelection}
          id={radio.id}
          name={radio.name}
          value={radio.value}
        >
          {radio.label}
        </InputRadio>
      ))}
    </StyledDiv>
  );
};

InputRadioGroup.propTypes = {
  children: PropTypes.array.isRequired,
};

export default InputRadioGroup;
