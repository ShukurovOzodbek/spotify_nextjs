import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async (obj: any) => {
    const { token } = obj
    const { data } = await axios.get("https://api.spotify.com/v1/browse/categories?country=UZ&offset=1&limit=50", {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })

    return data.categories.items
})
