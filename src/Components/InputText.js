import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { InputError } from './InputError';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInputText = styled.input``;

const StyledLabel = styled.label``;

export const InputText = ({ id, validate, label, required, ...props }) => {
  const [inputIsPristine, setInputIsPristine] = useState(true);
  const [value, setValue] = useState('');
  const [inputError, setInputError] = useState('');
  const inputHasError = !inputIsPristine && inputError;

  const handleErrorMessage = userInput => {
    if (required && validate === null) {
      if (userInput === '') {
        setInputError(required);
      } else {
        setInputError('');
      }
    }

    if (validate && required === null) {
      if (userInput === '' || validate.regex.test(userInput)) {
        setInputError('');
      } else {
        setInputError(validate.message);
      }
    }

    if (validate && required) {
      if (userInput === '') {
        setInputError(required);
      } else if (validate.regex.test(userInput)) {
        setInputError('');
      } else {
        setInputError(validate.message);
      }
    }
  };

  const handleChange = event => {
    setInputIsPristine(false);
    setValue(event.target.value);
    handleErrorMessage(event.target.value);
  };

  return (
    <StyledDiv>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInputText
        id={id}
        type="text"
        onChange={handleChange}
        value={value}
        {...props}
      />
      {inputHasError && <InputError>{inputError}</InputError>}
    </StyledDiv>
  );
};

InputText.defaultProps = {
  validate: null,
  required: null,
};

InputText.propTypes = {
  validate: PropTypes.shape({
    regex: PropTypes.instanceOf(RegExp),
    message: PropTypes.string,
  }),
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  required: PropTypes.string,
};

export default InputText;
