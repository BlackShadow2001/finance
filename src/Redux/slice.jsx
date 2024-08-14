import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userData } from "../JsonData/userDataLogin";

const userSlice = createSlice({
    name : "users",
    initialState : userData,
    reducers : {

    }
})

// createAsyncThunk
export default userSlice.reducer;  

