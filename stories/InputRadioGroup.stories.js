import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { InputRadioGroup } from '../src/Components/InputRadioGroup';

const yesInputRadio = {
  id: 'input-yes',
  name: 'yes-no',
  value: 'yes',
  label: text('label', 'Yes'),
};

const noInputRadio = {
  id: 'input-no',
  name: 'yes-no',
  value: 'no',
  label: text('label', 'No'),
};

storiesOf('InputRadioGroup', module).add('default', () => (
  <InputRadioGroup>{[yesInputRadio, noInputRadio]}</InputRadioGroup>
));
