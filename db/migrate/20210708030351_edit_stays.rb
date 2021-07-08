class EditStays < ActiveRecord::Migration[5.2]
  def change
    add_column :stays, :description, :string, null:false
  end
end
