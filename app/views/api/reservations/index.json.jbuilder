@reservations.each do |reservation|
    json.set! reservation.id do 
        json.partial! '/api/reservations/reservation', reservation 
    end 
end


json.stays do 
  @reservations.each do |reservation|
    json.set! reservation.stay_id do 
      json.partial! '/api/stays/stay', stay: reservation.stay
      if reservation.stay
      json.image url_for(reservation.stay.photo)
      end
    end
  end
end


