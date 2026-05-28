import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../features/favorites/favoritesSlice.js";
import watchlistReducer from "../features/watchlist/watchlistSlice.js";
import ratingReducer from "../features/ratings/ratingsSlice.js";

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        watchlist: watchlistReducer,
        rating: ratingReducer
    }
});

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('favorites', JSON.stringify(state.favorites.items));
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist.items));
    localStorage.setItem('rating', JSON.stringify(state.rating));
});