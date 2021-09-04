import React from 'react'

export default class Map extends React.Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        console.log(this.props)
        const options = {
            center:{lat: +this.props.lat || 40.622090 , lng: +this.props.long || -74.027770},
            zoom: 13,
            disableDefaultUI: true,
            mapTypeId: 'terrain',
        }
        this.map = new google.maps.Map(this.mapNode, options)

        this.map.addListener('idle', () => {
            
        })
    }

    
    render(){
        let marker;
        this.props.stays.forEach((stay) => {
            marker = new google.maps.Marker({
            position: new google.maps.LatLng(location.lat, location.long),
            map: this.map,
            animation:google.maps.Animation.Drop
            });
        })
        
        return (
            <div ref={ map => this.mapNode = map }></div>
        )
    }
}