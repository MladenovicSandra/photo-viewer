import { combineReducers } from 'redux'
import photosReducer from './photosReducer.js'

const rootReducer = combineReducers({
    photos: photosReducer
})

export default rootReducer


