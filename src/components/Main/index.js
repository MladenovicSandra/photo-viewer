import React from 'react'
import Navigation from '../Navigation'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PhotoList from '../PhotosList'
import PhotoDetails from '../PhotoDetails'
import AddNewPhoto from '../AddNewPhoto'
import { connect } from 'react-redux'

class MainComp extends React.Component {

    render(){
        console.log(this.props.showAddNewPhoto)
        return(
            <div style={{height:'100%', width:'100%'}}>
                <BrowserRouter>
                    <Navigation />
                    <AddNewPhoto show={this.props.showAddNewPhoto} />
                   
                    <Switch>
                        <Route exact path='/' component={PhotoList} />
                        <Route exact path='/details/:id' component={PhotoDetails} />
                        <Route exact path='/addnewphoto' component={AddNewPhoto} />
                    </Switch>
                </BrowserRouter> 
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        showAddNewPhoto: state.showAddNewPhoto.showAddNewPhoto
    }
}
const Main = connect(mapStateToProps)(MainComp)
export default Main
