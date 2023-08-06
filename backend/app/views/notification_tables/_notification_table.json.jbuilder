json.extract! notification_table, :id, :event, :message, :created_at, :updated_at
json.url notification_table_url(notification_table, format: :json)
