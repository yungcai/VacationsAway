class ChangeStays < ActiveRecord::Migration[5.2]
  def change
    rename_column :stays, :long, :lng
  end
end
