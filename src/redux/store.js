import { configureStore } from '@reduxjs/toolkit'
import countReducer from './countReducer.js'

const store = configureStore({
    reducer: countReducer
})

export default store
