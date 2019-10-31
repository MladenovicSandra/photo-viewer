export const openEditTitleAction = (photo) => {
    return({
        type: 'OPEN_EDIT_TITLE_ACTION',
        payload: photo
    })
}
export const closeEditTitleAction = () => {
    return({
        type: 'CLOSE_EDIT_TITLE_ACTION'
    })
}