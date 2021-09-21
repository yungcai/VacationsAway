import React from 'react'
import MarkerManager from '../../util/marker_manager';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { updateFilter } from '../../actions/filter_actions';





class StayMap extends React.Component {
    
  
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.stay){
    const { stay } = this.props

    const mapOptions = {
      center: { lat: stay.lat, lng: stay.long},
      zoom: 15
    };


    this.map = new google.maps.Map(this.mapNode, mapOptions);


    new google.maps.Marker({
      position: new google.maps.LatLng(stay.lat, stay.long),
      map: this.map,
      animation: google.maps.Animation.DROP,
    })
    }
  }

  
    render() {
    
      return (
  
        <div className='stay-map' ref={ map => this.mapNode = map }> </div>
      )
    }
  
  }

  export default StayMap