import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import { PageSkeleton } from "./shared/hooks/PageSkeleton"
import Layout from "./pages/Layout"
import NotFoundPage from "./pages/NotFoundPage"

const HomePage = lazy(() => import("./pages/HomePage"))
const SearchPage = lazy(() => import("./pages/SearchPage"))
const MoviePage = lazy(() => import("./pages/MoviePage"))
const WatchListPage = lazy(() => import("./pages/WatchListPage"))
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="movie/:id" element={<MoviePage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="watch-list" element={<WatchListPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App