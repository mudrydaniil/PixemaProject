import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
    loading: false,
    error: null,
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        // Сюда добавим экшены позже (например, setMovies)
    },
});

export default moviesSlice.reducer;