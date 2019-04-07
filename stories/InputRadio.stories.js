import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { InputRadio } from '../src/Components/InputRadio';

const inputRadioProps = {
  id: 'input-yes-no',
  name: 'yes-no',
  label: text('label', 'Yes'),
  value: 'yes',
  activeSelection: '',
  onChange() {},
};

storiesOf('InputRadio', module)
  .add('not selected', () => (
    <InputRadio
      id={inputRadioProps.id}
      name={inputRadioProps.name}
      value={inputRadioProps.value}
      activeSelection={inputRadioProps.activeSelection}
      onChange={inputRadioProps.onChange}
    >
      {inputRadioProps.label}
    </InputRadio>
  ))
  .add('selected', () => (
    <InputRadio
      id={inputRadioProps.id}
      name={inputRadioProps.name}
      value={inputRadioProps.value}
      activeSelection={inputRadioProps.value}
      onChange={inputRadioProps.onChange}
    >
      {inputRadioProps.label}
    </InputRadio>
  ));
