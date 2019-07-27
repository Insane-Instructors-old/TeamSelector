import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import axios from "axios";
 
export class MapContainer extends Component {

    state = {
        markers: []
    }

    componentDidMount() {
        axios.get("/markers")
        .then(response => {
            this.setState({markers: response.data});
        })
    }
  render() {
    return (
      <Map style={{height: 200, width: 200}} google={this.props.google} zoom={14}>
        {this.state.markers.map(marker => (
            <Marker {...marker} />
        ))}
 {/* <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />
  <Marker
    name={'Dolores park'}
    position={{lat: 37.759703, lng: -122.428093}} /> */}
 
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{"this.state.selectedPlace.name"}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyA5YJtNCsf3xlIvgvGh4T7xUZGAM-mnXT8")
})(MapContainer)