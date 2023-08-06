class VotingEventSerializer < ActiveModel::Serializer
  attributes :id, :eventsName, :eventsDescription, :duration, :eventDate, :user_id
end

