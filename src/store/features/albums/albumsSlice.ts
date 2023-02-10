import { createSlice } from '@reduxjs/toolkit'
import { fetchAlbums, fetchPlaylists } from './albumThunk'

interface IState {
    albums: Array<{}>,
    status: string,
    playlists: []
}

const initialState: IState = {
    albums: [],
    playlists: [],
    status: ''
}

export const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchAlbums.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchAlbums.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.albums = action.payload
            })
            .addCase(fetchAlbums.rejected, (state) => {
                state.status = 'rejected'
            })
        builder
            .addCase(fetchPlaylists.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchPlaylists.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.playlists = action.payload
            })
            .addCase(fetchPlaylists.rejected, (state) => {
                state.status = 'rejected'
            })
    }
})

export const { } = albumsSlice.actions
export default albumsSlice.reducer