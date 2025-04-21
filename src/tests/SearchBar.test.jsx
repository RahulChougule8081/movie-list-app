import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import SearchBar from '../components/SearchBar';


test('calls setQuery on input change', () => {
  const mockSetQuery = jest.fn();
  render(<SearchBar setQuery={mockSetQuery} />);

  const input = screen.getByPlaceholderText(/search movies/i);
  fireEvent.change(input, { target: { value: 'batman' } });

  expect(mockSetQuery).toHaveBeenCalledWith('batman');
});
