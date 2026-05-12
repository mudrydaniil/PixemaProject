export const baseUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/'; 

export const API = {
    MOVIES: {
        // В этом API список популярных фильмов или новинок получается так:
        LIST: 'films/collections?type=TOP_POPULAR_ALL', 
        DETAILS: (id: number | string) => `films/${id}/`,
        SEARCH: 'films/search-by-keyword/',
    },
    // Дополнительные настройки для фильтров, если понадобятся по ТЗ
    FILTERS: 'films/filters',
} as const;