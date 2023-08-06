class Candidate < ApplicationRecord
  belongs_to :voting_event
  belongs_to :user

  validates :role, presence: true, length: { maximum: 255 }
  validates :userName, presence: true, length: { maximum: 255 }
end
