const initState = {
    showDeletePhoto: false,
    id: 0
}

const deletePhotoReducer = ( state = initState, action) => {
    switch(action.type){
        case 'OPEN_DELETE_PHOTO_ACTION': {
            return{...state, 
                showDeletePhoto:true,
                id: action.payload
            }
        }
        case 'CLOSE_DELETE_PHOTO_ACTION': {
            return{...state, showDeletePhoto:false}
        }
    }
    return state  
}
export default deletePhotoReducer