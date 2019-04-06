import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { InputText } from '../src/Components/InputText';

const labelName = 'Name:';
const fakeValue = 'Some Name';
const inputErrorTestId = 'input-error';
const required = 'Cannot be blank';
const validate = { regex: /Some Name/, message: 'Only Some Name is valid' };

describe('with no validation or required prop', () => {
  it('should render with an associated label', () => {
    const { getByLabelText } = render(
      <InputText label={labelName} id="input-name" />
    );
    const input = getByLabelText(labelName);

    expect(input).toHaveAttribute('type', 'text');
  });

  it('onchange renders no error message', () => {
    const { getByLabelText, queryByTestId } = render(
      <InputText label={labelName} id="input-name" />
    );
    const input = getByLabelText(labelName);

    fireEvent.change(input, { target: { value: fakeValue } });

    expect(queryByTestId(inputErrorTestId)).toBeNull();
  });
});

describe('with required prop', () => {
  it('should show required error after typing and deleting', () => {
    const { getByLabelText, queryByTestId, getByTestId } = render(
      <InputText label={labelName} id="input-name" required={required} />
    );
    const input = getByLabelText(labelName);

    expect(queryByTestId(inputErrorTestId)).toBeNull();

    fireEvent.change(input, { target: { value: fakeValue } });

    expect(queryByTestId(inputErrorTestId)).toBeNull();

    fireEvent.change(input, { target: { value: '' } });

    expect(getByTestId(inputErrorTestId)).toHaveTextContent(required);

    fireEvent.change(input, { target: { value: fakeValue } });

    expect(queryByTestId(inputErrorTestId)).toBeNull();
  });
});

describe('with validate prop', () => {
  it('should show error when regex does not match', () => {
    const { getByLabelText, getByTestId } = render(
      <InputText label={labelName} id="input-name" validate={validate} />
    );
    const input = getByLabelText(labelName);

    fireEvent.change(input, {
      target: { value: fakeValue.substring(0, fakeValue.length - 2) },
    });

    expect(getByTestId(inputErrorTestId)).toHaveTextContent(validate.message);
  });

  it('should not show error when regex matches', () => {
    const { getByLabelText, getByTestId, queryByTestId } = render(
      <InputText label={labelName} id="input-name" validate={validate} />
    );
    const input = getByLabelText(labelName);

    fireEvent.change(input, {
      target: { value: fakeValue.substring(0, fakeValue.length - 2) },
    });

    expect(getByTestId(inputErrorTestId)).toHaveTextContent(validate.message);

    fireEvent.change(input, {
      target: { value: fakeValue },
    });

    expect(queryByTestId(inputErrorTestId)).toBeNull();
  });

  it('should not show error after typing and deleting', () => {
    const { getByLabelText, getByTestId, queryByTestId } = render(
      <InputText label={labelName} id="input-name" validate={validate} />
    );
    const input = getByLabelText(labelName);

    fireEvent.change(input, {
      target: { value: fakeValue.substring(0, fakeValue.length - 2) },
    });

    expect(getByTestId(inputErrorTestId)).toHaveTextContent(validate.message);

    fireEvent.change(input, {
      target: { value: '' },
    });

    expect(queryByTestId(inputErrorTestId)).toBeNull();
  });
});

describe('required and validate', () => {
  it('should show no error on render', () => {
    const { getByLabelText, queryByTestId } = render(
      <InputText
        label={labelName}
        id="input-name"
        validate={validate}
        required={required}
      />
    );
    const input = getByLabelText(labelName);

    expect(input).toHaveAttribute('type', 'text');
    expect(queryByTestId(inputErrorTestId)).toBeNull();
  });

  it('should show validation error when regex does not match', () => {
    const { getByLabelText, getByTestId } = render(
      <InputText
        label={labelName}
        id="input-name"
        validate={validate}
        required={required}
      />
    );
    const input = getByLabelText(labelName);

    fireEvent.change(input, {
      target: { value: fakeValue.substring(0, fakeValue.length - 2) },
    });

    expect(getByTestId(inputErrorTestId)).toHaveTextContent(validate.message);
  });

  it('should not show error when regex matches', () => {
    const { getByLabelText, getByTestId, queryByTestId } = render(
      <InputText
        label={labelName}
        id="input-name"
        validate={validate}
        required={required}
      />
    );
    const input = getByLabelText(labelName);

    fireEvent.change(input, {
      target: { value: fakeValue.substring(0, fakeValue.length - 2) },
    });

    expect(getByTestId(inputErrorTestId)).toHaveTextContent(validate.message);

    fireEvent.change(input, {
      target: { value: fakeValue },
    });

    expect(queryByTestId(inputErrorTestId)).toBeNull();
  });

  it('should show required error after typing and deleting everything', () => {
    const { getByLabelText, getByTestId, queryByTestId } = render(
      <InputText
        label={labelName}
        id="input-name"
        validate={validate}
        required={required}
      />
    );
    const input = getByLabelText(labelName);

    fireEvent.change(input, {
      target: { value: fakeValue.substring(0, fakeValue.length - 2) },
    });

    expect(getByTestId(inputErrorTestId)).toHaveTextContent(validate.message);

    fireEvent.change(input, {
      target: { value: fakeValue },
    });

    expect(queryByTestId(inputErrorTestId)).toBeNull();

    fireEvent.change(input, { target: { value: '' } });

    expect(getByTestId(inputErrorTestId)).toHaveTextContent(required);
  });
});
