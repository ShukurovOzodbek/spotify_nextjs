import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async (obj: any) => {
    const { token } = obj
    const { data } = await axios.get("https://api.spotify.com/v1/browse/new-releases?country=US&limit=50&offset=5", {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })

    return data.albums.items
})

export const fetchPlaylists = createAsyncThunk('albums/fetchPlaylists', async (obj: any) => {
    const { token } = obj
    const { data } = await axios.get("https://api.spotify.com/v1/me/playlists?limit=50&offset=0", {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })

    return data.items
})
