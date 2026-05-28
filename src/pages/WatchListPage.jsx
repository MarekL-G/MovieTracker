//WatchlistPage.jsx
import { useSelector } from 'react-redux';
import { MovieCard } from '../features/movies/MovieCard';

export default function WatchlistPage() {
  const watchlist = useSelector(s => s.watchlist.items);

  if (watchlist.length === 0) {
    return (
      <div className="text-center py-20 text-zinc-400">
        <p className="text-5xl mb-4">🔖</p>
        <p>Lista pusta. Wejdź na stronę filmu i kliknij "+ Do obejrzenia".</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Do obejrzenia ({watchlist.length})</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {watchlist.map(m => <MovieCard key={m.id} movie={m} />)}
      </div>
    </div>
  );
}