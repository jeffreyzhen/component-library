import React from 'react';
import { render } from 'react-testing-library';
import { matchers } from 'jest-emotion';

import { InputError } from '../src/Components/InputError';

expect.extend(matchers);

test('renders correctly', () => {
  const errorMessage = 'This is an error';
  const { getByTestId, container } = render(
    <InputError>{errorMessage}</InputError>
  );

  const error = getByTestId('input-error');
  expect(error).toHaveTextContent(errorMessage);
  expect(error).toHaveStyleRule('color', 'red');
  expect(container.firstChild).toMatchSnapshot();
});
