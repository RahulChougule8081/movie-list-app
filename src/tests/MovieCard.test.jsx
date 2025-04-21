import { render, screen } from '@testing-library/react';
import React from 'react';
import MovieCard from '../components/MovieCard';

test('renders movie title and image', () => {
  const movie = {
    title: 'Inception',
    poster_path: '/abc.jpg',
  };

  render(<MovieCard movie={movie} />);
  expect(screen.getByText('Inception')).toBeInTheDocument();
  expect(screen.getByAltText('Inception')).toHaveAttribute('src', expect.stringContaining('/abc.jpg'));
});

test('uses placeholder when poster_path is missing', () => {
  const movie = { title: 'No Image Movie' };
  render(<MovieCard movie={movie} />);
  expect(screen.getByAltText('No Image Movie')).toHaveAttribute('src', expect.stringContaining('placeholder'));
});
