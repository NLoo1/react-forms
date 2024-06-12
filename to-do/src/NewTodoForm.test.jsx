import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList';

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new todo", function() {
  const { getByLabelText, getByText, queryByText } = render(<TodoList />);

  const toDo = getByLabelText("Add new to-do");
  const submitBtn = getByText("Add");

  fireEvent.change(toDo, { target: { value: "Eat glue" } });
  fireEvent.click(submitBtn);

  expect(queryByText("Eat glue")).toBeInTheDocument();

});
