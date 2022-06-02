import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Viewemp from './Viewemp'; 
export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/viewemp">
                    <button>Viewemp</button>
                    </Link>

                </div>
                <div>
                    <Switch>
                        <Route path="/viewemp">
                            <Viewemp />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
