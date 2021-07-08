import * as StayApiUtil from "../util/stays_api_util"



export const RECEIVE_STAYS = "RECEIVE_STAYS";
export const RECEIVE_STAY = "RECEIVE_STAY";
export const REMOVE_STAY = "REMOVE_STAY";

const receiveStays = stays => ({
    type: RECEIVE_STAYS,
    stays
})

const receiveStay = stay => ({
    type: RECEIVE_STAY,
    stay,
});

const removeStay = stayId => ({
    type: REMOVE_STAY,
    stayId,
});




export const fetchStays = () => dispatch => (
  StayApiUtil.fetchStays()
  .then(stays => dispatch(receiveStays(stays)))
)

export const fetchStay = stayId => dispatch => (
    StayApiUtil.fetchStay(stayId)
    .then(stay => dispatch(receiveStay(stayId)))
)

export const createStay = stay => dispatch => (
    StayApiUtil.createStay(stay)
    .then(stay => dispatch(receiveStay(stay)))
)

export const updateStay = stay => dispatch => (
    StayApiUtil.updateStay(stay)
    .then(stay => dispatch(receiveStay(stay)))
)

export const updateStay = stay => dispatch => (
    StayApiUtil.updateStay(stay)
    .then(stay => dispatch(receiveStay(stay)))
)


export const removeStay = stayId => dispatch => (
    StayApiUtil.removeStay(stayId)
    .then(() => dispatch(removeStay(stayId)))
)


