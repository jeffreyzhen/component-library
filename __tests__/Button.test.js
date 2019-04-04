import React from 'react';
import { render } from 'react-testing-library';

import { Button } from '../src/Components/Button';

test('renders', () => {
  const buttonText = 'Button Text';
  const { getByText } = render(<Button>{buttonText}</Button>);

  const button = getByText(buttonText);
  expect(button).toHaveTextContent(buttonText);
});
