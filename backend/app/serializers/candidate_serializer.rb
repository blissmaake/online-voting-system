class CandidateSerializer < ActiveModel::Serializer
  attributes :id, :role, :userName, :voting_event_id, :user_id
end
