import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { fetchMovies } from '../api/tmdb';

const Home = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadMovies = async (isLoadMore = false) => {
    try {
      setLoading(true);
      const data = await fetchMovies(query, isLoadMore ? page + 1 : 1);
      setMovies(prev => isLoadMore ? [...prev, ...data.results] : data.results);
      setPage(isLoadMore ? page + 1 : 1);
    } catch (err) {
      setError('Failed to fetch movies.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies();
  }, [query]);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      {error && <p>{error}</p>}
      <MovieList movies={movies} />
      <button className="load-more-btn" onClick={() => loadMovies(true)} disabled={loading}>
        {loading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
};

export default Home;