import React, { Component } from 'react'
import './Weather.css'
import scriptLoader from 'react-async-script-loader'


class Weather extends Component {
    state = {
        currently: {
            summary: '',
            temperature: '',
            humidity: '',
            windSpeed: '',
            visibility: ''
        },
    }

    constructor(props) {
        super(props)
        this.fetchWeatherData(props)
    }

    fetchWeatherData(props) {
        fetch(`https://api.darksky.net/forecast/06ee8bb2486286e5f8136af487403254/${props.match.params.latlon}`)
            .then(response => response.json())
            .then(data => {
                //this.codeAddress('Earlham College, Richmond, IN')
                const currently = {
                    summary: data.currently['summary'],
                    temperature: data.currently['temperature'],
                    humidity: data.currently['humidity'],
                    windSpeed: data.currently['windSpeed'],
                    visibility: data.currently['visibility'],
                }
                this.setState({ currently })
            }
            )
    }

    // codeAddress(address) {
    //     const geocoder = new google.maps.Geocoder();
    //     geocoder.geocode({ 'address': address }, (results, status) => {
    //         if (status == 'OK') {
    //             console.log(results[0])
    //             // map.setCenter(results[0].geometry.location);
    //             // var marker = new google.maps.Marker({
    //             //     map: map,
    //             //     position: results[0].geometry.location
    //             // });
    //         } else {
    //             alert('Geocode was not successful for the following reason: ' + status);
    //         }
    //     })
    // }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            this.fetchWeatherData(nextProps)
        }
    }

    render() {
        const data = this.state.currently
        return (
            <div className="weather">
                {/*<script async defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9X87jWU180t1ooQJPqH_fjsdL9vWAFkA&callback=initMap">
        </script>*/}
                <h3>summary: {data.summary}</h3>
                <h3>weather: {data.temperature}</h3>
                <h3>humidity: {data.humidity}</h3>
                <h3>visibility: {data.visibility}</h3>
                <h3>windSpeed: {data.windSpeed}</h3>
            </div>

        )
    }
}
export default Weather