import React from 'react'
import MarkerManager from '../../util/marker_manager';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { updateFilter } from '../../actions/filter_actions';

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 }, // this is SF
  zoom: 13
};

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class StayMap extends React.Component {
    
  
    componentDidMount() {
      // set the map to show SF
    
  
      // wrap this.mapNode in a Google Map
      this.map = new google.maps.Map(this.mapNode, mapOptions);
      this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
      if (this.props.singleStay) {
        this.props.fetchStay(this.props.stayId);
      } else {
        this.registerListeners();
        this.MarkerManager.updateMarkers(this.props.stays)
      }



      this.map.addListener("idle", () => {
        const latlngbounds = this.map.getBounds();
        const northEast = {
          lat: latlngbounds.getNorthEast().lat(),
          lng: latlngbounds.getNorthEast().lng()
        };
        const southWest = {
          lat: latlngbounds.getSouthWest().lat(),
          lng: latlngbounds.getSouthWest().lng()
        };
  
        const bounds = {
          northEast, southWest
        };
        if (bounds.northEast.lat - bounds.southWest.lat !== 0){
           this.props.updateFilter("bounds", bounds);
        }
      });

    }

    componentDidUpdate() {
      this.MarkerManager.updateMarkers(this.props.stays);
    }


    registerListeners() {
      google.maps.event.addListener(this.map, 'idle', () => {
        const { north, south, east, west } = this.map.getBounds().toJSON();
        const bounds = {
          northEast: { lat:north, lng: east },
          southWest: { lat: south, lng: west } };
        this.props.updateFilter('bounds', bounds);
      });
      google.maps.event.addListener(this.map, 'click', (event) => {
        const coords = getCoordsObj(event.latLng);
        this.handleClick(coords);
      });
    }

    handleMarkerClick(stay) {
      this.props.history.push(`stays/${stay.id}`);
    }


  
    render() {
      return (
        // ...
        <div id='map-container' ref={ map => this.mapNode = map }> </div>
      )
    }
  
    //...
  }

  export default withRouter(StayMap)