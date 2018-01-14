Rails.application.routes.draw do
  resources :conversations, defaults: {format: :json}
  scope :api do
    mount_devise_token_auth_for 'User', at: 'auth', controllers: {
      registrations: 'users/registrations',
      sessions: 'users/sessions'
    }
  end
end
