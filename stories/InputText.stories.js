import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { InputText } from '../src/Components/InputText';

storiesOf('InputText', module)
  .add('default', () => (
    <InputText id="input-name" label={text('label', 'Name:')} />
  ))
  .add('with placeholder', () => (
    <InputText
      id="input-name"
      label={text('label', 'Name:')}
      placeholder={text('placeholder', 'Full Name')}
    />
  ))
  .add('with required', () => (
    <InputText
      id="input-name"
      label={text('label', 'Name:')}
      required={text('required', 'Name cannot be blank')}
    />
  ))
  .add('with validate', () => (
    <InputText
      id="input-name"
      label={text('label', 'Name:')}
      validate={{
        regex: /^Some Name$/,
        message: 'Some Name is the only valid name',
      }}
    />
  ))
  .add('with required & validate', () => (
    <InputText
      id="input-name"
      label={text('label', 'Name:')}
      required={text('required', 'Name cannot be blank')}
      validate={{
        regex: /^Some Name$/,
        message: 'Some Name is the only valid name',
      }}
    />
  ));
