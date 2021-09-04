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
        this.createMarkerFromStay(stay, this.handleClick);
      }
    });

    Object.keys(this.markers).forEach(stayId => {
      if (!staysObj[stayId]){
       this.removeMarker(this.markers[stayId]);
      }
    })

  }

  createMarkerFromStay(stay){
    const position = new google.maps.LatLng(stay.lat, stay.long);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      stayId: stay.id,
      icon: {
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        scale: 14,
        fillColor: "lightgray",
        fillOpacity: .9,
        strokeWeight: 0.7,

      },
      label: {
      text: `$${stay.price}`,
      fontWeight: "bold",
      color:"rgba(236, 29, 126, 1)",
      fontSize:"19px"
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