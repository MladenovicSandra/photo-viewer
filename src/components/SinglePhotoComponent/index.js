import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function SinglePhotoComponent(props) {
    let name = props.title
    let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
    return (
        <Link to={'/details/' + props.identificationNum } className='link-style'>
            <div className='photo-container'>
                <div>
                    <img className='photo'  src={props.link} alt='slika' />
                </div>
                <span className='title'>{nameCapitalized}</span>
            </div>
        </Link>
    )
}
