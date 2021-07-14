class AddColumnStays < ActiveRecord::Migration[5.2]
  def change
    add_column :stays, :amenities, :text
  end
end
