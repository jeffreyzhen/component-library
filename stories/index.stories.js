import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { Button } from '../src/Components/Button';
import { InputText } from '../src/Components/InputText';
import { InputError } from '../src/Components/InputError';

const storiesOfButton = storiesOf('Button', module);
const storiesOfInputText = storiesOf('InputText', module);
const storesofInputError = storiesOf('InputError', module);

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOfButton
  .add('with text', () => <Button onClick={action('clicked')}>Click me</Button>)
  .add('loading', () => <Button disabled>Loading...</Button>)
  .add('disabled', () => <Button disabled>Click me</Button>);

storiesOfInputText
  .add('default', () => <InputText id="input-name" label="Name:" />)
  .add('with placeholder', () => (
    <InputText id="input-name" label="Name:" placeholder="Full Name" />
  ))
  .add('with required', () => (
    <InputText id="input-name" label="Name:" required="Name can't be blank" />
  ))
  .add('with validate', () => (
    <InputText
      id="input-name"
      label="Name:"
      validate={{
        regex: /^Some Name$/,
        message: 'Some Name is the only valid name',
      }}
    />
  ))
  .add('with required & validate', () => (
    <InputText
      id="input-name"
      label="Name:"
      required="Name can't be blank"
      validate={{
        regex: /^Some Name$/,
        message: 'Some Name is the only valid name',
      }}
    />
  ));

storesofInputError.add('default', () => (
  <InputError>This is an error message</InputError>
));
