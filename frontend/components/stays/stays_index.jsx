import React from 'react';
import { Link } from 'react-router-dom';
import StayMap from '../stay_map/stay_map';
import StaysIndexItem from './stays_index_item';
import stay_show_container from './stay_show_container';
import IndexMap from '../stay_map/index_map';


class StaysIndex extends React.Component{

  constructor(props){
      super(props)
  }

    componentDidMount(){
        this.props.fetchStays();
    }


   
    render(){
    
        const {stays, deleteStay} = this.props
         
        return(
            <div className='index-container'>
                <div className='index-header'>STAYS AVAILABLE</div>
                <div className='index-ul'>
                    {  stays.map((stay, idx)=>(
                       <StaysIndexItem
                        stay={stay}
                        deleteStay={deleteStay}
                        key={idx}
                        />
                    ))
                    }
            
                </div>
                <div className='index-map'>
                    
                    <IndexMap stays={stays} updateFilter={this.props.updateFilter} />
                </div>
            </div>
        ) 
                
    }
}

export default StaysIndex