import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import { InputRadio } from '../src/Components/InputRadio';

const fakeRadioProps = {
  label: 'Yes',
  value: 'yes',
  id: 'input-radio',
  name: 'some-group',
};

it('should render', () => {
  const onChange = jest.fn();
  const { getByLabelText } = render(
    <InputRadio
      value={fakeRadioProps.value}
      id={fakeRadioProps.id}
      name={fakeRadioProps.name}
      onChange={onChange}
    >
      {fakeRadioProps.label}
    </InputRadio>
  );

  const input = getByLabelText(fakeRadioProps.label);
  expect(input).toHaveAttribute('type', 'radio');
  expect(input.checked).toBeFalsy();
});

it('should be checked on click', () => {
  let activeSelection;
  const onChange = jest.fn(event => {
    activeSelection = event.target.value;
  });

  const { getByLabelText, rerender } = render(
    <InputRadio
      value={fakeRadioProps.value}
      id={fakeRadioProps.id}
      name={fakeRadioProps.name}
      onChange={onChange}
      activeSelection={activeSelection}
    >
      {fakeRadioProps.label}
    </InputRadio>
  );

  const input = getByLabelText(fakeRadioProps.label);

  fireEvent.click(input);
  expect(onChange).toHaveBeenCalledTimes(1);

  rerender(
    <InputRadio
      value={fakeRadioProps.value}
      id={fakeRadioProps.id}
      name={fakeRadioProps.name}
      onChange={onChange}
      activeSelection={activeSelection}
    >
      {fakeRadioProps.label}
    </InputRadio>
  );

  expect(input.checked).toBeTruthy();
});
