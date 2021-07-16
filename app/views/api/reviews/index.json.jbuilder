@reviews.each do |review|
    json.reviews do
        json.set! review.id do
             json.extract! json.extract! review, :id, :description, :star_rating, :user_id, :stay_id
                json.set! review.user.id do 
                    json.extract! review.user, :username
                end
        end 
    end



 end

