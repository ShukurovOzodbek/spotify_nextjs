import { createSlice } from '@reduxjs/toolkit'
import { fetchAlbums, fetchPlaylists, searchAlbums, fetchAritsts } from './albumThunk'

interface IState {
    albums: Array<{}>
    foundAlbums: any,
    status: string,
    playlists: any
    foundAritsts: Array<{}>
}

const initialState: IState = {
    albums: [],
    foundAlbums: [],
    playlists: [],
    foundAritsts: [],
    status: 'idle'
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
        builder
            .addCase(searchAlbums.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(searchAlbums.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.foundAlbums = action.payload
            })
            .addCase(searchAlbums.rejected, (state) => {
                state.status = 'rejected'
            })
        builder
            .addCase(fetchAritsts.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchAritsts.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.foundAritsts = action.payload
            })
            .addCase(fetchAritsts.rejected, (state) => {
                state.status = 'rejected'
            })
    }
})

export const { } = albumsSlice.actions
export default albumsSlice.reducer