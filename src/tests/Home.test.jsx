import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

jest.mock('../api/tmdb', () => ({
  fetchMovies: jest.fn(() => Promise.resolve([])), // Return empty list for simplicity
}));

test('renders search bar', () => {
  render(<Home />);
  expect(screen.getByPlaceholderText(/search movies/i)).toBeInTheDocument();
});
