export interface Genre {
    genre: string;
}

export interface Country {
    country: string;
}

export interface Movie {
    kinopoiskId: number;
    nameRu: string | null;
    nameEn: string | null;
    nameOriginal: string | null;
    posterUrl: string;
    posterUrlPreview: string;
    ratingKinopoisk: number | null;
    year: number | null;
    genres: Genre[];
    countries: Country[];
    type: string;
}

export interface CatalogState {
    movies: Movie[];
    total: number;
    isLoading: boolean;
    error: string | null;
}