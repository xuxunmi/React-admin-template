/**
 * 该文件暴露一个store对象
 */

import { configureStore } from '@reduxjs/toolkit'
// 引入redux-thunk,用于支持异步action
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers'

const store = configureStore({
    reducer: rootReducer,
    middleware: [reduxThunk]
})

export default store
