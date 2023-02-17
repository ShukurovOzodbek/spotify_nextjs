import { configureStore } from "@reduxjs/toolkit";
import albumsSlice from './features/albums/albumsSlice';
import categoriesSlice from "./features/categories/categoriesSlice";
import tracksSlice from "./features/tracks/tracksSlice";

export const store = configureStore({
    reducer: {
        tracks: tracksSlice,
        albums: albumsSlice,
        categories: categoriesSlice
    }
})

export type AppDispatch = typeof store.dispatch