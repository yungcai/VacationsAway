class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :stay_id, null: false
      t.string :image_url, null:false
      t.timestamps
    end
    add_index :photos, :stay_id
  end
end
