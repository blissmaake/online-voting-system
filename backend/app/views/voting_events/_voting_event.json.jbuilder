json.extract! voting_event, :id, :eventsName, :eventsDescription, :candidates, :duration, :created_at, :updated_at
json.url voting_event_url(voting_event, format: :json)
