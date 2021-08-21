import * as ReservationApiUtil from '../util/reservation_api_util'

export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS'
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION'
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION'

export const receiveReservations = reservations => ({
    type: RECEIVE_RESERVATIONS,
    reservations
})

export const receiveReservation = reservation => ({
    type: RECEIVE_RESERVATION,
    reservation
})

export const removeReservation = reservationId => ({
    type: REMOVE_RESERVATION,
    reservationId
})

export const fetchReservations = () => dispatch => (
    ReservationApiUtil.fetchReservations().then(reservations => (
        dispatch(receiveReservations(reservations))
    ))
)

export const fetchReservation = id => dispatch => (
    ReservationApiUtil.fetchReservation(id).then(id => (
        dispatch(receiveReservation(id))
    ))
)

export const createReservation = formData => dispatch => (
    ReservationApiUtil.createReservation(formData).then(reservations => (
        dispatch(receiveReservation(reservations))
    ))
)

export const deleteReservation = reservationId => dispatch => (
    ReservationApiUtil.deleteReservation(reservationId).then(reservationId => (
        dispatch(removeReservation(reservationId))
    ))
)
