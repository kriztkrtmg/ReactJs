import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import WeatherHome from './WeatherApp/WeatherHome';

class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/weather" exact>
                            <WeatherHome />
                        </Route>
                        
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default Routes;



