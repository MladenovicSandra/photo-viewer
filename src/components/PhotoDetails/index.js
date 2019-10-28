import React, { Component } from 'react'
import './style.css'
import EnterNewTitle from '../EnterNewTitle'
import Backdrop from '../Backdrop'

export default class PhotoDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            photo: {},
            allow: false
        }
    }
    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/photos/${this.props.match.params.id}`,
        {method: 'get'})
        .then(res => res.json())
        .then(data => {
            this.setState({
                setShow: false,
                show: false
            })
        })
    }
    handleShow = () => {
        this.setState({
            setShow: true
        })
    }
    render() {
        let title = this.state.photo.title
        let titleCapitalized
        if(title){
            titleCapitalized = title.charAt(0).toUpperCase() + title.slice(1)
        }
        let allow = false
        let component = null
        let backdrop = null
        if(this.state.allow){
            component = <EnterNewTitle 
                            identificationNum={this.props.match.params.id} 
                            url = {this.state.photo.url}
                            thumbnailUrl = {this.state.photo.thumbnailUrl}
                        />
            backdrop = <Backdrop />
        }
        return (
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

                            <button 
                                className='edit-title'
                                onClick={this.handleShow}
                            >
                                Click here to edit the title!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
