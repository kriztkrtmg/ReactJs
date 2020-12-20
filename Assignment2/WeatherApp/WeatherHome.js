import React, { Component } from 'react';
import {WeatherAPI} from './WeatherAPI';  
import { CircularProgress } from '@material-ui/core';
import ResultBody from '../Material/ResultBody';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import background from '../Material/wallpaper.jpg'
  
class WeatherHome extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            city : 'Kathmandu',
            WeatherData : {},
            isLoading : true,
        }
    }
    
    componentDidMount() {
        this.getWeatherData();
    }

    getWeatherData = () => {
        let self = this;
        WeatherAPI.getCurrentWeatherData(this.state.city).then( (response) => {
            self.setState({
                WeatherData : response.data,
                isLoading : false,
            })
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    };

    handleButton = (event) => {
        this.getWeatherData();
    }

    render() {
        return (
            <div style={{textAlign:'center', backgroundImage: `url(${background})`, minHeight:'100vh'}}>
                <div>
                    <div style={{display : 'inline-flex', padding : 30}}>
                        <form noValidate autoComplete="off">
                            <TextField label="Enter City Name" name = 'city' onChange={this.handleChange} />
                        </form>
                        <Button color="primary" size='small' variant='contained' startIcon={<SearchIcon />} onClick={this.handleButton} >
                            Search
                        </Button>   
                    </div>
                </div>
                <div>
                    {this.state.isLoading ? <CircularProgress /> :
                    <div>
                        <ResultBody data= {this.state.WeatherData}/>
                    </div>
                    }
                </div>

            </div>
        )
    }
}
export default WeatherHome;


