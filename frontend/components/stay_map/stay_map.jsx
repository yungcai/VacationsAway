import React from 'react'
import MarkerManager from '../../util/marker_manager';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

class StayMap extends React.Component {
    //...
  
    componentDidMount() {
      // set the map to show SF
      const mapOptions = {
        center: { lat: 37.7758, lng: -122.435 }, // this is SF
        zoom: 13
      };
  
      // wrap this.mapNode in a Google Map
      this.map = new google.maps.Map(this.mapNode, mapOptions);
      this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
      this.MarkerManager.updateMarkers(this.props.stays);

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