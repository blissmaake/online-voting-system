class EventsOption < ApplicationRecord
  belongs_to :voting_event

  validates :options, :eventName, presence: true
end
