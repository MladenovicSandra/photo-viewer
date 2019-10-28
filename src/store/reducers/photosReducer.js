const initData = {
    photos : [],
    loading: false,
    fail: false
}

const photosReducer = (state = initData, action) => {
    switch(action.type){
        case 'FETCH_PHOTOS_SUCCESSFUL': {
            return {...state,
                photos: action.payload,
                loading: false,
                fail: false
            }
        }
        case 'FETCH_PHOTOS_LOADING': {
            return {
                ...state,
                loading: true,
                fail: false
            }  
        }
        case 'FETCH_PHOTOS_FAIL': {
            return {
                ...state,
                loading: false,
                fail: true
            }
        }
    }
    return state
}
export default photosReducer