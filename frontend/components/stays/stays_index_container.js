import {connect} from 'react-redux'
import { deleteStay, fetchStays} from '../../actions/stay_actions'
import StaysIndex from './stays_index'
import { updateFilter } from '../../actions/filter_actions'




const mSTP = state => ({
    stays: Object.values(state.entities.stays)
})

const mDTP = dispatch => ({

    fetchStays: () => dispatch(fetchStays()),
    deleteStay: stayId => dispatch(deleteStay(stayId)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mSTP, mDTP)(StaysIndex)