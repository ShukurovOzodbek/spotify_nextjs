import { createSlice } from '@reduxjs/toolkit'
import { fetchTracks } from './tracksThunk'

interface IState {
    tracks: Array<{}>
    status: string
}

const initialState: IState = {
    tracks: [],
    status: 'idle'
}

export const tracksSlice = createSlice({
    name: 'tracks',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchTracks.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchTracks.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.tracks = action.payload
            })
            .addCase(fetchTracks.rejected, (state) => {
                state.status = 'rejected'
            })
    }
})

export const { } = tracksSlice.actions
export default tracksSlice.reducer