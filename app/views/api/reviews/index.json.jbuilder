@reviews.each do |review|
    json.reviews do
        json.set! review.id do
             json.extract! json.extract! review, :id, :description, :star_rating, :user_id, :stay_id
        end 
    end

    json.users do
        json.set! review.user.id do
            json.extract! review.user, :id, :username, :email
        end
    end

 end

