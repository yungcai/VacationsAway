import React from 'react';
import { Link } from 'react-router-dom';
import StaysIndexItem from './stays_index_item';
import stay_show_container from './stay_show_container';

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
            </div>
        )
        
    }
}

export default StaysIndex