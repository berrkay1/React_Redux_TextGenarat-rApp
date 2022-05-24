
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchText = createAsyncThunk('text/getText', async (url) => {
    const res = await axios(url);
    return res.data;
});


const textSlice = createSlice({
    name:'text',
    initialState:{
        items:[]
    },
    reducers:{
    },
    extraReducers:{
        [fetchText.fulfilled]: (state,action) => {
            state.items = action.payload
        }
    }
})

export default textSlice.reducer;