import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async (obj: any) => {
    const { token, searchKey } = obj
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type: "album"
        }
    })

    return data.albums.items
})