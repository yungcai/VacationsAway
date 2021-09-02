json.partial! 'reservation', reservation: @reservation
json.extract! @reservation.stay, :location, :description, :price