import {connect} from 'react-redux'
import { deleteStay, fetchStays} from '../../actions/stay_actions'
import StaysIndex from './stays_index'




const mSTP = state => ({
    stays: Object.values(state.entities.stays)
})

const mDTP = dispatch => ({

    fetchStays: () => dispatch(fetchStays()),
    deleteStay: stayId => dispatch(deleteStay(stayId))
})

export default connect(mSTP, mDTP)(StaysIndex)