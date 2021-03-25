module BamzookaCakeday
  class BirthdaysController < ::ApplicationController
    before_action :enforce_logged_in

    def index
      @month = params[:month]
      users = User.where('extract(month from anniversary_date) = ?', @month)
      render json: users
    end
  end
end
