import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { closeDeletePhotoAction } from '../../store/actions/deletePhotoAction'

class ModalDeletePhoto extends Component {
    fetchDelete = () => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${this.props.identificationNum}`,
            {method: 'DELETE'})
            .then(res => res.json())
            .then(data => { 
                console.log(data)
                this.props.handleClose()
            })
    }
    render() {
        return (
            <Modal show={this.props.showDeletePhoto} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Photo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Are you sure you want to delete this photo?</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-dark" onClick={this.fetchDelete}>
                        Yes
                    </Button>
                    <Button variant="outline-dark" onClick={this.props.handleClose}>
                            No
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
const mapStateToProps = (state) => {
    return({
        showDeletePhoto: state.showDeletePhoto.showDeletePhoto,
        identificationNum: state.showDeletePhoto.id
    })
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleClose: () => {
            dispatch(closeDeletePhotoAction())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ModalDeletePhoto)
