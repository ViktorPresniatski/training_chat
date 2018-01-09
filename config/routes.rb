Rails.application.routes.draw do
  scope :api do
    mount_devise_token_auth_for 'User', at: 'auth', controllers: {
      registrations: 'users/registrations',
      sessions: 'users/sessions'
    }
  end
end
