import React from 'react';
import { Link } from 'react-router-dom';
import StaysIndexItem from './stays_index_item';

class StaysIndex extends React.Component{

    componentDidMount(){
        this.props.fetchStays();
    }

    render(){
        const {stays, deleteStay} = this.props
        return(
            <div>
                <ul>
                    {  stays.map(stay=>(
                        <StaysIndexItem
                        stay={stay}
                        deleteStay={deleteStay}
                        />
                    ))
                    }
                </ul>
                <Link to='/stays'>EXAMPLE BUTTON</Link>
            </div>
        )
    }
}

export default StaysIndex