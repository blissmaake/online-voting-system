Rails.application.routes.draw do
  resources :candidates
  resources :user_votes
  resources :events_options
  resources :feedbacks, only: [:index, :create, :destroy ]
  resources :notification_tables
  resources :voting_events
  resources :users, only:[:index, :create, :show ]
  put '/users/:id/changepassword', to: 'users#changepassword'
  get "/logged_in", to:'sessions#logged_in'
  post "/login", to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
 
  resources :candidates do
    collection do
      get 'by_voting_event/:voting_event_id', action: :by_voting_event, as: :by_voting_event
    end
  end


  # resources :voting_events do
  # member do
  #   delete 'destroy_by_user/:user_id', action: :destroy_by_user, as: :destroy_by_user
  # end
  # end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
