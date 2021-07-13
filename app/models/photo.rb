class Photo < ApplicationRecord 
    validates :image_url, presence:true

    belongs_to :stay,
    primary_key: :id,
    foreign_key: :stay_id,
    class_name: :Stay
end