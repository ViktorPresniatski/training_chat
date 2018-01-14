class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken

#  before_action :authenticate_user!

  rescue_from ActionController::ParameterMissing, with: :invalid_params
  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  protected

  def invalid_params(exception)
    render json: { errors: "Required parameter is missing: #{exception.param}" }, status: :unprocessable_entity, head: :unprocessable_entity
  end

  def not_found
    render json: { errors: "Item not found" }, status: :not_found, head: :not_found
  end

end
