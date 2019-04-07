import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../src/Components/Button';

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Click me</Button>)
  .add('loading', () => <Button disabled>Loading...</Button>)
  .add('disabled', () => <Button disabled>Click me</Button>);
