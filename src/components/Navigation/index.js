import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default class Navigation extends Component {
    render() {
        return (
            <div className='menu-container'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <div className='left-container'>   
                        <span className='page-name'>PhotoGalery</span>
                    </div>
                </Link>

                <div className='right-container'>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <span className='container-item'>PHOTOS</span>
                    </Link>
                    <span className='container-item'>ADD NEW PHOTO</span>
                </div>
            </div>
        )
    }
}
