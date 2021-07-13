
export const fetchReservations = () => {
    return $.ajax({
        type: 'GET',
        url: `/api/reservations`
    })
}

export const fetchReservation = reservationId => {
    return $.ajax({
        type: "GET",
        url: `/api/reservations/${reservationId}`
    })
}


export const createReservation = reservation => {
    return $.ajax({
        type: "POST",
        url: `/api/reservations`,
        data: { reservation }
    })
}

export const updateReservation = reservation => {
    return $.ajax({
        type: "PATCH",
        url: `/api/reservations/${reservation.id}`,
        data: { reservation }
    })
}

export const deleteReservation = reservationId => {
    return $.ajax({
        type: "DELETE",
        url: `/api/reservations/${reservationId}`
    })
}