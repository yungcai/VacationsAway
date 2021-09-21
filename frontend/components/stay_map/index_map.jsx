import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';



class IndexMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.714996, lng: -73.963132 },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    

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

    this.MarkerManager.updateMarkers(this.props.stays);
  }
 

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.stays);
  }


  handleMarkerClick(stay) {
    this.props.history.push(`stays/${stay.id}`);
  }


  render() {
    return (
      <div id="map-container" ref={map => this.mapNode = map}>
        Map
      </div>
    );
  }
}

export default withRouter(IndexMap);