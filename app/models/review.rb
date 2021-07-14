class Review < ApplicationRecord 

    validates :stay_id, :user_id, presence:true 
    validates :description, presence:true
    validates :star_rating, presence:true, inclusion: {in: [1,2,3,4,5]}

    belongs_to :stay,
    primary_key: :id,
    foreign_key: :stay_id,
    class_name: :Stay

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User 

    

end