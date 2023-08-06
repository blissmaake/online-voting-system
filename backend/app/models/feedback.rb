class Feedback < ApplicationRecord
  belongs_to :user
  belongs_to :voting_event
  
  validates :message, presence: true
end
