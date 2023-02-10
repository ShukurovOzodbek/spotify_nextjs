import { fetchCategories } from './categoryThunk';
import { createSlice } from '@reduxjs/toolkit'

interface IState {
    categories: Array<{}>
    status: string
}

const initialState: IState = {
    categories: [],
    status: 'idle'
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.categories = action.payload
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.status = 'rejected'
            })
    }
})

export const { } = categoriesSlice.actions
export default categoriesSlice.reducer