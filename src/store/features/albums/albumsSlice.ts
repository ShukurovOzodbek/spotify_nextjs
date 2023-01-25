import { createSlice } from '@reduxjs/toolkit'
import { fetchAlbums } from './albumThunk'

interface IState {
    albums: Array<{}>,
    status: string
}

const initialState: IState = {
    albums: [],
    status: ''
}

export const tracksSlice = createSlice({
    name: 'tracks',
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
    }
})

export const { } = tracksSlice.actions
export default tracksSlice.reducer