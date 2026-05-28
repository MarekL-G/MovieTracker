import { tmdbClient } from "./tmdbClient";

export const moviesApi = {
    popular: (page = 1) => tmdbClient.get('/movie/popular', {params: {page}})
    .then(r => r.data),

    topRated: (page = 1) => tmdbClient.get('/movei/top_rated' , {params: {page}})
    .then(r => r.data),

    search: (query, page = 1) => tmdbClient.get('/search/movie', {params: {query, page}})
    .then(r => r.data),

    details: (id) => tmdbClient.get(`/movie/${id}`, {params: {append_to_response: 'credits,similar,videos'}})
    .then(r => r.data),

    genres: () => tmdbClient.get('/genre/movie/list')
    .then(r => r.data),

    discover: (params) => tmdbClient.get('/discover/movie', {params})
    .then(r => r.data)
}

export const tmdbImage = (path, size = 'w500') => path ? `https://image.tmdb.org/t/p/${size}${path}` : null;