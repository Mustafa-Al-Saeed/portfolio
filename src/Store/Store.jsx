import { configureStore } from '@reduxjs/toolkit'
import main from "./Slices/Main"

export const store = configureStore({
    reducer: {main : main},
})