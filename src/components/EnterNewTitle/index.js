import React from 'react'
import './style.css'

export default class EnterNewTitle extends React.Component{
    constructor(){
        super()
        this.state = {
            inputValue : ''
        }
    }
    onChangeHandler = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.inputValue)
        const putMethod = {
            method: 'PUT',
            headers: {
             'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                title: this.state.inputValue,
                url: this.props.url,
                thumbnailUrl: this.props.thumbnailUrl
            }) 
        }
        fetch(`https://jsonplaceholder.typicode.com/photos/${this.props.identificationNum}`, putMethod)
        .then(response => response.json())
        .then(data => console.log(data)) 
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit} className='input-and-save'>
                <input onChange={this.onChangeHandler} className='input-title' type='text' placeholder='Enter the new title here...' />
                <button className='save-btn'>Save changes</button>
            </form>
        )
    }
}
