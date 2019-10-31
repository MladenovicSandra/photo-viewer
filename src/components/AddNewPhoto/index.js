import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { closeAddNewPhotoAction } from '../../store/actions/addNewPhotoAction'
import './style.css'

class AddNewPhoto extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title : '',
            thumbnailUrl : '',
            photoUrl : '',
            successfulAdd: false
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
            successfulAdd: false
        })
    }
    handleSubmit = () => {
        const postMethod = {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                thumbnailUrl: this.state.thumbnailUrl,
                url: this.state.photoUrl
            })
        }
        fetch('https://jsonplaceholder.typicode.com/photos', postMethod)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                successfulAdd: true
            })
        })
    }
    render (){
        let successfulAdd = null
        if(this.state.successfulAdd){
            successfulAdd = <span>The photo has been successfully added!</span>
        }
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
               <Modal.Header closeButton>
                   <Modal.Title>Add New Photo</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                   <div className='body-container'>
                       <div className='cont'>
                            <div className='label-and-input'>
                                 <span className='label'>Title:</span>
                                 <input id='title' className='input' onChange={this.handleChange} type='text' placeholder='Enter photo title...' />
                            </div>
                            <div className='label-and-input'>
                                 <span className='label'>Thumbnail URL:</span>
                                 <input id='thumbnailUrl' className='input' onChange={this.handleChange} type='text' placeholder='Enter the thumbnail url here...' />
                            </div>
                            <div className='label-and-input'>
                                 <span className='label'>Photo URL:</span>
                                 <input id='photoUrl' className='input' onChange={this.handleChange} type='text' placeholder='Enter the photo url here...' />
                            </div>
                            <div className='report-container'>
                                {successfulAdd}  
                            </div>
                       </div>
                   </div>
               </Modal.Body>
               <Modal.Footer>
                    <Button variant="outline-dark" onClick={this.handleSubmit}>
                            Submit
                    </Button>
                   <Button variant="outline-dark" onClick={this.props.handleClose}>
                           Close
                   </Button>
               </Modal.Footer>
            </Modal>
        )
    } 
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleClose: () => {
            dispatch(closeAddNewPhotoAction())
        }
    }
}
export default connect(null, mapDispatchToProps)(AddNewPhoto)