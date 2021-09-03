@reservations.each do |reservation|
    json.set! reservation.id do
        json.extract! reservation, :id, :start_date, :end_date, :user_id, :stay_id
        json.extract! reservation.stay, :description, :price
    end
end