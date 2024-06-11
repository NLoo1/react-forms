import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';
import { v4 as uuidv4 } from 'uuid';
import '@testing-library/jest-dom';


// Mock uuidv4 to return a consistent value for each call
jest.mock('uuid', () => ({
  v4: jest.fn()
}));

beforeEach(() => {
  let idCounter = 0;
  uuidv4.mockImplementation(() => `id-${idCounter++}`);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function() {
  const { getByLabelText, getByText, queryByTestId } = render(<BoxList />);

  // Initial boxes
  expect(queryByTestId("box-id-0")).toBeInTheDocument();
  expect(queryByTestId("box-id-1")).toBeInTheDocument();

  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const backgroundColorInput = getByLabelText("Background Color:");
  const submitBtn = getByText("Add Item");

  // fill out the form
  fireEvent.change(widthInput, { target: { value: "100" } });
  fireEvent.change(heightInput, { target: { value: "100" } });
  fireEvent.change(backgroundColorInput, { target: { value: "red" } });
  fireEvent.click(submitBtn);

  // New box should exist with a new id
  expect(queryByTestId("box-id-2")).toBeInTheDocument();
});
