import { configureStore } from '@reduxjs/toolkit';
import engineReducer from './engineSlice';

export const store = configureStore({
    reducer: {
        engine: engineReducer
    },
})