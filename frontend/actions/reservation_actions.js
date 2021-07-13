import * as ReservationsApiUtil from '../util/reservations_api_util'

export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";


const receiveReservations = reservations => ({
    type: RECEIVE_RESERVATIONS,
    reservations
})

const receiveReservation = reservation => ({
    type: RECEIVE_RESERVATION,
    reservation
})


const removeReservation = reservationId => ({
    type: REMOVE_RESERVATION,
    reservationId
})


export const fetchReservations= () => dispatch => {
    return ReservationsApiUtil.fetchReservations()
        .then(reservations => dispatch(receiveReservations(reservations)))
}

export const fetchReservation= reservationId => dispatch => {
    return ReservationsApiUtil.fetchReservation(reservationId)
        .then(reservation => dispatch(receiveReservation(reservation)))
}

export const createReservation= reservation => dispatch => {
    return ReservationsApiUtil.createReservation(reservation)
        .then(reservation => dispatch(receiveReservation(reservation)))
}

export const updateReservation= reservation => dispatch => {
    return ReservationsApiUtil.updateReservation(reservation)
        .then(reservation => dispatch(receiveReservation(reservation)))
}

export const deleteReservation= reservationId => dispatch => {
    return ReservationsApiUtil.deleteReservation(reservationId)
        .then(reservation => dispatch(removeReservation(reservation)))
}

