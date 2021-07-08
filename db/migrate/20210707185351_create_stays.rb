class CreateStays < ActiveRecord::Migration[5.2]
  def change
    create_table :stays do |t|
      t.integer :user_id, null:false
      t.decimal :price, null:false 
      t.string :location, null:false
      t.float :lat, null:false
      t.float :long, null:false
    end
    add_index :stays, :user_id
  end
end
