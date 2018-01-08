class Users::RegistrationsController < DeviseTokenAuth::RegistrationsController
  skip_before_action :authenticate_user!

  def create
    super do |resource|
      resource.username = params[:username]
    end
  end
end