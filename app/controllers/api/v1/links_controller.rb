class Api::V1::LinksController < ApplicationController
  def index
    render json: Link.top_ten_read_in_last_24_hours
  end

  def create
    return invalid_url_error unless Link.valid_url?(link_params[:url])
    return no_title_error unless has_title?
    link = current_user.links.create(link_params)
    render json: link
  end

  def update
    @link = Link.find(params[:id])
    @link.update_attributes(read: true)
    redirect_to links_path
  end

  private

      def link_params
        params.permit(:title, :url)
      end

      def invalid_url_error
        render json: "Invalid Url Bro!"
      end

      def no_title_error
        render json: "You need a title Bro!"
      end

      def has_title?
        link_params[:title].chomp != "" ? true : false
      end
end
