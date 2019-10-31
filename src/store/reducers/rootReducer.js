import { combineReducers } from 'redux'
import photosReducer from './photosReducer.js'
import addNewPhotoReducer from './addNewPhotoReducer'
import editTitleReducer from './editTitleReducer'
import deletePhotoReducer from './deletePhotoReducer'

const rootReducer = combineReducers({
    photos: photosReducer,
    showAddNewPhoto: addNewPhotoReducer,
    showEditTitle: editTitleReducer,
    showDeletePhoto: deletePhotoReducer
})

export default rootReducer


