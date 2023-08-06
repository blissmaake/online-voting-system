class UserVote < ApplicationRecord
    belongs_to :candidate
    belongs_to :voting_event
    belongs_to :user

end
