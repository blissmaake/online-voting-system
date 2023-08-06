class VotingEvent < ApplicationRecord
  has_many :user_votes
  has_many :candidates
  belongs_to :user


  validates :eventsName, presence: true, length: { maximum: 255 }
  validates :eventsDescription, presence: true
  validates :duration, presence: true, numericality: { only_integer: true, greater_than: 0 }
   validates :eventDate, presence: true
  
end
