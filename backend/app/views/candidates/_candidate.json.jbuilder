json.extract! candidate, :id, :role, :userName, :user_vote_id, :voting_event_id, :created_at, :updated_at
json.url candidate_url(candidate, format: :json)
