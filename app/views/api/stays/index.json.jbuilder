@stays.each do |stay|
  json.set! stay.id do
    json.partial! 'stay', stay: stay
    json.image url_for(stay.photo)
  end
end

