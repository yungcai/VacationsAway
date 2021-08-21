export const fetchReservations = userId => (
    $.ajax({
        method: 'get',
        url: `/api/reservations/${userId}`
    })
)

export const fetchReservation = id => (
    $.ajax({
        method: 'get',
        url: `/api/reservations/${id}`,
    })
)

export const createReservation = reservation => (
    $.ajax({
        method: 'post',
        url: '/api/reservations',
        data: {reservation}
    })
)

export const deleteReservation = reservationId => (
    $.ajax({
        method: 'delete',
        url: `/api/reservations/${reservationId}`,
    })
)