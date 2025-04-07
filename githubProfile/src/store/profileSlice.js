import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userinfo: {
        
    }
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        getInfo: (state, action) => {
            state.userinfo = action.payload;
        }
    }
})

export const { getInfo } = profileSlice.actions
export default profileSlice.reducer
