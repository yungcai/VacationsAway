@stays.each do |stay|
    json.set! stay.id do 
        json.extract! stay, :user_id, :price, :location, :lat, :long, :description 
    end 
end