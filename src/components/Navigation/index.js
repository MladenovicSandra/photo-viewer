import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { connect } from 'react-redux'
import { openAddNewPhotoAction } from '../../store/actions/addNewPhotoAction'

class Navigation extends Component {
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
                    
                    <span className='container-item' onClick={this.props.openAddNewPhoto}>ADD NEW PHOTO</span>  
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        openAddNewPhoto: () => {
            dispatch(openAddNewPhotoAction())
        }
    }
}
export default connect(null, mapDispatchToProps)(Navigation)
