class UserVoteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :voting_event_id, :candidate_id
end
