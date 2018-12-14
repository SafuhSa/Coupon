class Api::UsersController < ApplicationController
  before_action :snackcase_params
   def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :full_name)
  end

  def snackcase_params
    params[:user] = params[:user].transform_keys(&:underscore)
  end
end
