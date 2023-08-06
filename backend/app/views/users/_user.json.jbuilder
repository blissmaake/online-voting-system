json.extract! user, :id, :firstName, :lastName, :userName, :email, :password_digest, :profile_picture, :is_admin, :created_at, :updated_at
json.url user_url(user, format: :json)
