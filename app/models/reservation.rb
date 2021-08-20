class Reservation < ApplicationRecord

    validates :start_date, :end_date, :user_id, :stay_id

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :stay,
    foreign_key: :stay_id,
    class_name: :Stay 

    
end