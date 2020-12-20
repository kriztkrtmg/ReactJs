import { Card } from '@material-ui/core';
import React, { Component } from 'react';

class ResultBody extends Component {
    
    render() {
        let specificData = this.props.data;
        return (
            <div>
                <Card style={{margin:'auto', width:'50%', backgroundColor: '#f9fafb', borderRadius: 20, }}>
                    <div style={{color: '#12d40f', fontSize: 24, fontWeight : 500}}>
                        {new Date().toDateString()}
                    </div>
                    <div style={{color: '#cc3716', fontWeight : 900, fontSize:32}}>
                        {specificData.name},{specificData.sys.country}
                    </div>
                    <div style={{fontSize:48, fontWeight:600, color: '#3f6dd9'}}>
                        {specificData.main.temp}°C
                    </div>
                    <div style={{fontSize:24, fontWeight:500, display:'flex', justifyContent:'space-around'}}>
                            | Min-temp : {specificData.main.temp_min}°C |
                            Max-temp : {specificData.main.temp_max}°C |
                            Humidity: {specificData.main.humidity}% |
                    </div>
                    <div style={{fontSize:24, fontWeight:500}}>
                    Feels like {specificData.main.feels_like}°C, {specificData.weather[0].description}.
                        
                    </div>

                </Card>
            </div>
        )
    }
}

export default ResultBody;