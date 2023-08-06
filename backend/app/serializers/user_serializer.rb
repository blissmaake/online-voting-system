class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :userName, :email, :profile_picture, :is_admin
end
