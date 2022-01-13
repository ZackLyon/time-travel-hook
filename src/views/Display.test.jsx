import { render, fireEvent } from '@testing-library/react';
import Display from './Display.jsx';

it('should set a date as the next date in a series relative to current date (even if it is not the last in series) and click undo or redo buttons to move backward or forward in series', () => {
  const date1 = '2022-01-13';
  const date2 = '2016-12-10';
  const date3 = '2019-06-24';

  const container = render(<Display />);
  const input = container.getByLabelText('date-input');
  const display = container.getByLabelText('date-display');
  const undo = container.getByLabelText('undo-button');
  const redo = container.getByLabelText('redo-button');

  // display stock message when no date selected
  expect(display.textContent).toBe('Please select a date');
  // enter date1, display: date1
  fireEvent.change(input, { target: { value: date1 } });
  expect(display.textContent).toBe(date1);
  // enter date2, display: date2
  fireEvent.change(input, { target: { value: date2 } });
  expect(display.textContent).toBe(date2);
  // click undo and go back to date1
  fireEvent.click(undo);
  expect(display.textContent).toBe(date1);
  // enter date3, updates date array to [date1, date3, date2]
  fireEvent.change(input, { target: { value: date3 } });
  expect(display.textContent).toBe(date3);
  // click undo and go back to date1
  fireEvent.click(undo);
  expect(display.textContent).toBe(date1);
  // click redo and go forward to date3
  fireEvent.click(redo);
  expect(display.textContent).toBe(date3);
  // click redo again and go forward to date2
  fireEvent.click(redo);
  expect(display.textContent).toBe(date2);
});
