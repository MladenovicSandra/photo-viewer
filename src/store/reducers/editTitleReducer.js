const initState = {
    showEditTitle: false,
    photo: {}
}

const editTitleReducer = ( state = initState, action) => {
    switch(action.type){
        case 'OPEN_EDIT_TITLE_ACTION': {
            return{...state, 
                showEditTitle:true,
                photo: action.payload
            }
        }
        case 'CLOSE_EDIT_TITLE_ACTION': {
            return{...state, showEditTitle:false}
        }
    }
    return state  
}
export default editTitleReducer