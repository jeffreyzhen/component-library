import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  display: flex;
`;

export const InputRadioGroup = ({ children, ...props }) => {
  const [activeSelection, setActiveSelection] = useState('');

  const handleChange = event => {
    setActiveSelection(event.target.value);
  };

  const childrenHOC = React.Children.map(children, child => {
    return React.cloneElement(child, {
      onChange: handleChange,
      activeSelection,
    });
  });

  return <StyledDiv {...props}>{childrenHOC}</StyledDiv>;
};

InputRadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InputRadioGroup;
