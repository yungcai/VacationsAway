class Stay < ApplicationRecord 

    validates :description, :lat, :long, :location, :price, presence:true 

    has_many :reviews

    belongs_to :user,
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: :User

    has_many :photos,
    primary_key: :id,
    foreign_key: :stay_id,
    class_name: :Photo
end
