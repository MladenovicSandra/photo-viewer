import React, { Component } from 'react'
import './style.css'
import EnterNewTitle from '../EnterNewTitle'
import { Modal, Button } from 'react-bootstrap'

export default class PhotoDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            photo: {},
            show: false,
            showDelete: false
        }
    }
    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/photos/${this.props.match.params.id}`,
        {method: 'get'})
        .then(res => res.json())
        .then(data => {
            this.setState({
                photo: data
            })
        })
    }
    handleShow = () => {
        this.setState({
            show: true
        })
    }
    handleShowDelete = () => {
        this.setState({
            showDelete: true
        })
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    handleCloseDelete = () => {
        this.setState({
            showDelete: false
        })
    }
    fetchDelete = () => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${this.props.match.params.id}`,
            {method: 'DELETE'})
            .then(res => res.json())
            .then(data => console.log(data))
        this.setState({
            showDelete: false
        })
    }
    render() {
        let title = this.state.photo.title
        let titleCapitalized
        if(title){
            titleCapitalized = title.charAt(0).toUpperCase() + title.slice(1)
        }
        return (
            <div className='main-container'>
            <div className='photo-details-container'>
                <span className='main-label'>Photo Details</span>
                <div className='photo-and-details-container'>
                    <img className='photo-item' src={this.state.photo.url} alt='slika'></img>

                    <div className='details-container-main'>
                        <div className='details-container'>
                            <span className='label'>Title:</span>
                            <span className='item'>{titleCapitalized}</span>
                            <span className='label'>Album ID:</span>
                            <span className='item'>{this.state.photo.albumId}</span>
                            <span className='label'>Photo url:</span>
                            <a href={this.state.photo.url} className='item'>{this.state.photo.url}</a>
                            <span className='label'>Thumbnail url:</span>
                            <a href={this.state.photo.url} className='item'>{this.state.photo.thumbnailUrl}</a>
                            
                            <div className='btn-container'> 
                                <Button variant="outline-dark" onClick={this.handleShow}>
                                    Edit title
                                </Button>
                                <Button variant="outline-danger" onClick={this.handleShowDelete}>
                                    Delete
                                </Button>
                            </div>

                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Edit Title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <EnterNewTitle
                                        identificationNum = {this.state.photo.id}
                                        url = {this.state.photo.url}
                                        thumbnailUrl = {this.state.photo.thumbnailUrl}
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            <Modal show={this.state.showDelete} onHide={this.handleCloseDelete}>
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
                                    <Button variant="outline-dark" onClick={this.handleCloseDelete}>
                                            No
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
