export const fetchPhotosSuccessful = (data) => {
    return ({
        type: 'FETCH_PHOTOS_SUCCESSFUL',
        payload: data
    })
}
export const fetchPhotosLoading = () => {
    return ({
        type: 'FETCH_PHOTOS_LOADING'
    })
}
export const fetchPhotosFail = () => {
    return ({
        type: 'FETCH_PHOTOS_FAIL'
    })
}

export const fetchPhotosAction = () => {
    return(dispatch) => {
        dispatch(fetchPhotosLoading())
        fetch('https://jsonplaceholder.typicode.com/photos', {method: 'get'})
        .then(res => res.json())
        .then(data => {
            dispatch(fetchPhotosSuccessful(data))
        })
        .catch(() => {
            dispatch(fetchPhotosFail())
        })
    }
}