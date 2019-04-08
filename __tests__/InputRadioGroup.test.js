import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { InputRadioGroup } from '../src/Components/InputRadioGroup';

const yesInputRadio = {
  id: 'input-yes',
  name: 'yes-no',
  value: 'yes',
  label: 'Yes',
};

const noInputRadio = {
  id: 'input-no',
  name: 'yes-no',
  value: 'no',
  label: 'No',
};

const radioGroupTestId = 'yes-no-radio';

it('should render two InputRadios', () => {
  const { getByLabelText, getByTestId } = render(
    <InputRadioGroup data-testid={radioGroupTestId}>
      {[yesInputRadio, noInputRadio]}
    </InputRadioGroup>
  );

  const radioGroup = getByTestId(radioGroupTestId);
  expect(radioGroup.children).toHaveLength(2);

  const yesRadio = getByLabelText('Yes');
  expect(yesRadio.checked).toBeFalsy();

  const noRadio = getByLabelText('No');
  expect(noRadio.checked).toBeFalsy();
});

it('should only have one checked out of the group', () => {
  const { getByLabelText } = render(
    <InputRadioGroup>{[yesInputRadio, noInputRadio]}</InputRadioGroup>
  );

  const yesRadio = getByLabelText('Yes');
  const noRadio = getByLabelText('No');

  fireEvent.click(yesRadio);

  expect(yesRadio.checked).toBeTruthy();
  expect(noRadio.checked).toBeFalsy();

  fireEvent.click(noRadio);

  expect(yesRadio.checked).toBeFalsy();
  expect(noRadio.checked).toBeTruthy();
});
