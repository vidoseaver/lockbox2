class Api::V1::AllLinksController < ApplicationController
  def index
    render json: current_user.links.reverse
  end
end
