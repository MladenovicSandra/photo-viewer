import React from 'react'
import Navigation from '../Navigation'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PhotoList from '../PhotosList'
import PhotoDetails from '../PhotoDetails'

export default class Main extends React.Component {

    render(){
        return(
            <div>
                <BrowserRouter>
                    <Navigation />

                    <div className='routes'>
                        <Switch>
                            <Route exact path='/' component={PhotoList} />
                            <Route exact path='/details/:id' component={PhotoDetails} />
                        </Switch>
                    </div>
                </BrowserRouter> 
            </div>
        )
    }
}
