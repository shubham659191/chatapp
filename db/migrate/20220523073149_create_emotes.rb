class CreateEmotes < ActiveRecord::Migration[7.0]
  def change
    create_table :emotes do |t|
      t.belongs_to :massage, null: false, foreign_key: true
      t.string :emoji

      t.timestamps
    end
  end
end
