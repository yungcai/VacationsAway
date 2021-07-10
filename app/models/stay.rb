class Stay < ApplicationRecord 

    validates :description, :lat, :long, presence:true 

    has_many :reviews

    belongs_to :user,
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: :User

    has_one_attached :photo
end
