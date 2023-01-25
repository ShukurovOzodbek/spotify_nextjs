import { configureStore } from "@reduxjs/toolkit";
import trackSlice from "./features/tracks/trackSlice";
import albumsSlice from "./features/albums/albumsSlice";

export const store = configureStore({
    reducer: {
        tracks: trackSlice,
        albums: albumsSlice
    }
})

export type AppDispatch = typeof store.dispatch