import { configureStore } from "@reduxjs/toolkit";
import trackSlice from "./features/tracks/trackSlice";

export const store = configureStore({
    reducer: {
        tracks: trackSlice
    }
})

export type AppDispatch = typeof store.dispatch