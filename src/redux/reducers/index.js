/**
 * 汇总reducer文件
 */
import { combineReducers } from '@reduxjs/toolkit'
import countReducer from './counter'
import personReducer from './person'

const rootReducer = combineReducers({
    count: countReducer,
    person: personReducer
})

export default rootReducer
