class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null:false
      t.integer :stay_id, null:false
      t.text :description, null:false
      t.integer :star_rating, null:false
    end
    add_index :reviews, :user_id 
    add_index :reviews, :stay_id
  end
end
