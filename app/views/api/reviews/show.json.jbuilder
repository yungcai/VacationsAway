
    json.review do
        json.extract! @review, :id, :description, :star_rating, :user_id, :stay_id 
        
    end

    json.user do
        json.set! @review.user.id do
            json.extract! @review.user, :id, :username, :email
        end
    end


