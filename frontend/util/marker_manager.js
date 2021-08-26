import React from 'react';


class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
  }

  updateMarkers(stays) {
    const staysObj = {};

    stays.forEach(stay => {staysObj[stay.id] = stay;});

    stays.forEach(stay => {
      if (!this.markers[stay.id]){
        this.createMarkerFromSpot(stay, this.handleClick);
      }
    });

    Object.keys(this.markers).forEach(stayId => {
      if (!staysObj[stayId]){
       this.removeMarker(this.markers[stayId]);
      }
    })

  }

  createMarkerFromSpot(stay){
    const position = new google.maps.LatLng(spot.lat, spot.long);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      stayId: stay.id,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 18,
        fillColor: "white",
        fillOpacity: .8,
        strokeWeight: 0.4
      },
      label: {
      text: `$${spot.price}`,
      fontWeight: "bold"
      }
        
    });
    marker.addListener('click', () => this.handleClick(stay));

    this.markers[marker.stayId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.stayId].setMap(null);
    delete this.markers[marker.stayId];
  }

}

export default MarkerManager