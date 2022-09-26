import { createSlice } from "@reduxjs/toolkit";

export const engineSlice = createSlice({
    name: "engine",
    initialState: {
        engineName: "google"
    },
    reducers: {
        handleChangeEngine: (state, action) => {
            state.engineName = action.payload
        }
    }
});

export const { handleChangeEngine } = engineSlice.actions;

export default engineSlice.reducer;