//FavoritesPage.jsx

import { useSelector } from 'react-redux';
import { MovieCard } from '../features/movies/MovieCard';

export default function FavoritesPage() {
  const favorites = useSelector(s => s.favorites.items);

  if (favorites.length === 0) {
    return (
      <div className="text-center py-20 text-zinc-400">
        <p className="text-5xl mb-4">🤍</p>
        <p>Brak ulubionych. Wejdź na stronę filmu i kliknij serduszko.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Ulubione ({favorites.length})</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {favorites.map(m => <MovieCard key={m.id} movie={m} />)}
      </div>
    </div>
  );
}