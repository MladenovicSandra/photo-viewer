import React, { Component } from 'react'
import './style.css'
import { Button } from 'react-bootstrap'
import { openEditTitleAction } from '../../store/actions/editTitleAction'
import { connect } from 'react-redux'
import ModalEditTitle from '../ModalEditTitle'
import ModalDeletePhoto from '../ModalDeletePhoto'
import { openDeletePhotoAction } from '../../store/actions/deletePhotoAction'

class PhotoDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            photo: {}
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
    render() {
        let title = this.state.photo.title
        let titleCapitalized
        if(title){
            titleCapitalized = title.charAt(0).toUpperCase() + title.slice(1)
        }
        console.log(this.props)
        return (
            <div className='main-container'>
            <div>
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
                                <Button variant="outline-dark" onClick={() => this.props.openEditTitle(this.state.photo)}>
                                    Edit title
                                </Button>
                                <Button variant="outline-danger" onClick={() => this.props.openDeletePhoto(this.state.photo.id)}>
                                    Delete
                                </Button>
                            </div>

                            <ModalEditTitle />
                            <ModalDeletePhoto />
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        openEditTitle: (photo) => {
            dispatch(openEditTitleAction(photo))
        },
        openDeletePhoto: (id) => {
            dispatch(openDeletePhotoAction(id))
        }
    }
}
export default connect(null,mapDispatchToProps)(PhotoDetails)
