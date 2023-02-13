import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTracks = createAsyncThunk('tracks/fetchTracks', async (obj: any) => {
    const { token, searchKey } = obj
    const { data } = await axios.get("https://api.spotify.com/v1/", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type: 'track'
        }
    })

    return data.tracks.items
})
