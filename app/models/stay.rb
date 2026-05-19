class Stay < ApplicationRecord 

    validates :description, :lat, :lng, :location, :price, :amenities, presence:true 

    belongs_to :user,
      primary_key: :id, 
      foreign_key: :user_id,
      class_name: :User

    has_one_attached :photo

    has_many :reviews,
      primary_key: :id,
      foreign_key: :stay_id,
      class_name: :Review

    has_many :reservations,
      primary_key: :id,
      foreign_key: :stay_id,
      class_name: :Reservation

    def self.in_bounds(bounds)
      self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
    end

end
