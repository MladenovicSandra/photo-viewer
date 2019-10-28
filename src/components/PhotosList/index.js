import React, { Component } from 'react'
import { connect } from 'react-redux'
import SinglePhotoComponent from '../SinglePhotoComponent'
import '../SinglePhotoComponent/style.css'
import { fetchPhotosAction } from '../../store/actions/fetchPhotosAction'

class PhotoList extends Component {
    componentDidMount(){
        this.props.fetchPhotos()
    }
    render() {
        console.log(this.props.photos)
        return (
            <div className='all-photos-container'>
                {this.props.photos.map((item, i) => 
                    <SinglePhotoComponent title={item.title} link={item.thumbnailUrl} key={i} identificationNum={item.id} />
                )}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        photos: state.photos.photos
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPhotos: () => {
            dispatch(fetchPhotosAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PhotoList)
