import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { Button } from '../src/Components/Button';
import { InputError } from '../src/Components/InputError';

const storiesOfButton = storiesOf('Button', module);
const storesofInputError = storiesOf('InputError', module);

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOfButton
  .add('with text', () => <Button onClick={action('clicked')}>Click me</Button>)
  .add('loading', () => <Button disabled>Loading...</Button>)
  .add('disabled', () => <Button disabled>Click me</Button>);

storesofInputError.add('default', () => (
  <InputError>This is an error message</InputError>
));
