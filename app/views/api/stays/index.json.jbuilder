@stays.each do |stay|
  json.set! stay.id do
    json.partial! 'stay', stay: stay
  end
end