const initState = {
    showAddNewPhoto: false
}

const addNewPhotoReducer = ( state = initState, action) => {
    switch(action.type){
        case 'OPEN_ADD_NEW_PHOTO': {
            return{...state, showAddNewPhoto:true}
        }
        case 'CLOSE_ADD_NEW_PHOTO': {
            return{...state, showAddNewPhoto:false}
        }
        default: {
            return state  
        }
    }
}
export default addNewPhotoReducer