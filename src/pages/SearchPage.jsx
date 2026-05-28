//SearchPage.jsx
import { useSearchParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '../shared/hooks/useDebounce';
import { moviesApi } from '../shared/api/movies';
import { MovieCard } from '../features/movies/MovieCard';
import { MovieCardSkeleton } from '../features/movies/MovieCardSkeleton';

export default function SearchPage() {
  // Stan wyszukiwania w URL — można kopiować link z wynikami, działa przycisk wstecz
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const debouncedQuery = useDebounce(query, 400);

  const { data, isLoading } = useQuery({
    queryKey: ['movies', 'search', debouncedQuery],
    queryFn: () => moviesApi.search(debouncedQuery),
    enabled: debouncedQuery.length > 1,  // nie wysyłaj dla pustego inputa
    placeholderData: prev => prev         // stare wyniki podczas nowego requestu
  });

  return (
    <div>
      <input
        value={query}
        onChange={e => setSearchParams({ q: e.target.value })}
        placeholder="Szukaj filmu..."
        className="w-full p-3 mb-6 bg-zinc-800 text-white rounded text-lg"
        autoFocus
      />

      {data?.results.length === 0 && (
        <p className="text-zinc-400">Brak wyników dla "{debouncedQuery}"</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {isLoading
          ? Array.from({ length: 12 }).map((_, i) => <MovieCardSkeleton key={i} />)
          : data?.results.map(m => <MovieCard key={m.id} movie={m} />)
        }
      </div>
    </div>
  );
}