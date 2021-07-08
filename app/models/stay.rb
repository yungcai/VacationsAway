class Stay < ApplicationRecord 

    validates :description, :lat, :long, presence:true 

    has_many :reviews
end
