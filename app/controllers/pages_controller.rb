class PagesController < ApplicationController
  def home
    @user = User.first
  end

  def update
  # For file attached to has_one_attached
  # @user.avatar.attach(params[:avatar])

  # For Array of images to has_many_attached
    params[:friends].each do |friend|
      @user.friends.attach(friend)
    end
  end
end
