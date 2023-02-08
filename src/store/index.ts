import { configureStore } from "@reduxjs/toolkit";
import trackSlice from "./features/tracks/trackSlice";
import albumsSlice from "./features/albums/albumsSlice";
import categoriesSlice from "./features/categories/categoriesSlice";

export const store = configureStore({
    reducer: {
        tracks: trackSlice,
        albums: albumsSlice,
        categories: categoriesSlice 
    }
})

export type AppDispatch = typeof store.dispatch