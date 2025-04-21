import { render, screen } from '@testing-library/react';
import React from 'react';
import MovieList from '../components/MovieList';
import '@testing-library/jest-dom';

test('renders movies', () => {
  const sampleMovies = [
    { id: 1, title: 'Movie One', poster_path: null },
    { id: 2, title: 'Movie Two', poster_path: null },
  ];

  render(<MovieList movies={sampleMovies} />);

  expect(screen.getByText('Movie One')).toBeInTheDocument();
  expect(screen.getByText('Movie Two')).toBeInTheDocument();
});
