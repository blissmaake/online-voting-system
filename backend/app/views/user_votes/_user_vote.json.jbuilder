json.extract! user_vote, :id, :userName, :vote_id, :eventName, :created_at, :updated_at
json.url user_vote_url(user_vote, format: :json)
