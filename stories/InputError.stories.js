import React from 'react';
import { storiesOf } from '@storybook/react';

import { InputError } from '../src/Components/InputError';

storiesOf('InputError', module).add('default', () => (
  <InputError>This is an error message</InputError>
));
