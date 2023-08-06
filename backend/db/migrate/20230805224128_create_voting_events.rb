class CreateVotingEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :voting_events do |t|
      t.string :eventsName
      t.text :eventsDescription
      t.integer :duration
      t.date :eventDate      
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
