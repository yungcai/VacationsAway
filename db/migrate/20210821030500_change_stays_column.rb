class ChangeStaysColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :stays, :lng, :long
  end
end
