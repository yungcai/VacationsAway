class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = {};

  }

  updateMarkers(stays){
    const staysObj = {};
    stays.forEach(stay => staysObj[stay.id] = stay);
    
    const filtered = stays.filter(stay => !this.markers[stay.id])
    filtered.forEach(newStay => this.createMarkerFromStay(newStay))
    
    const filteredIds = Object.keys(this.markers).filter(stayId => !staysObj[stayId])
    filteredIds.forEach(stayId => this.removeMarker(this.markers[stayId]))
    
  }

  createMarkerFromStay(stay){
    const position = new google.maps.LatLng(stay.lat, stay.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      stayId: stay.id
    });
    return marker;
    // marker.addListener('click', () => this.handleClick(stay));
    // this.markers[marker.stayId] = marker;
    

  }

  removeMarker(marker){
    this.markers[marker.stayId].setMap(null);
    delete this.markers[marker.stayId];
  }
}

export default MarkerManager;