import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import StoredData from './TodoApp/storedData';
import TodoHome from './TodoApp/TodoHome';
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
                        <Route path="/todo/:id" exact>
                            <TodoHome />
                        </Route>
                        <Route path="/data" exact>
                            <StoredData />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default Routes;



