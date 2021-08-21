json.extract! @reservation, :id, :start_date, :end_date, :user_id, :stay_id
json.extract! @reservation.stay, :location, :description, :price