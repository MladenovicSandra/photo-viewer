import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { closeEditTitleAction } from '../../store/actions/editTitleAction'
import EnterNewTitle from '../EnterNewTitle'

function ModalEditTitle(props) {
    return (
        <Modal show={props.showEditTitle} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EnterNewTitle
                    identificationNum = {props.photo.id}
                    url = {props.photo.url}
                    thumbnailUrl = {props.photo.thumbnailUrl}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
const mapStateToProps = (state) => {
    return ({
        showEditTitle: state.showEditTitle.showEditTitle,
        photo: state.showEditTitle.photo
    })
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleClose: () => {
            dispatch(closeEditTitleAction())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ModalEditTitle)
