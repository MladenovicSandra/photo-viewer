import React from 'react'
import './style.css'
import { Button } from 'react-bootstrap'

export default class EnterNewTitle extends React.Component{
    constructor(){
        super()
        this.state = {
            inputValue : '',
            successfulChange : false
        }
    }
    onChangeHandler = (e) => {
        this.setState({
            inputValue: e.target.value,
            successfulChange: false
        })
    }
    handleSubmit = () => {
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
        .then(data => {
                console.log(data)
                this.setState({
                    successfulChange: true
                })
            }) 
    }
    render(){
        let successfulChange = null
        if(this.state.successfulChange){
            successfulChange = <span>The title has been successfuly changed!</span>
        }
        return (
            <div  className='modal-container'>
                <div className='input-and-btn-container'>
                    <input onChange={this.onChangeHandler} className='input-title' type='text' placeholder='New photo title...' />
                    <Button variant="outline-dark" onClick={this.handleSubmit}>
                            Submit
                    </Button>
                </div>
                <div className='report-container'>
                    {successfulChange}  
                </div>
            </div>
        )
    }
}
