export const openDeletePhotoAction = (id) => {
    return({
        type: 'OPEN_DELETE_PHOTO_ACTION',
        payload: id
    })
}
export const closeDeletePhotoAction = () => {
    return({
        type: 'CLOSE_DELETE_PHOTO_ACTION'
    })
}