class LinksController < ApplicationController
  def index
    @link = Link.new
    @links = current_user.links
  end

  def edit
    @link = Link.find(params[:id])
  end

  def create
    return invalid_url_error unless Link.valid_url?(link_params[:url])
    return no_title_error unless has_title?
    current_user.links.create(link_params)
    flash[:success] = "Link Added!"
    redirect_to links_path
  end


  def update
    link = current_user.links.find(params[:id])
    return invalid_url_error unless Link.valid_url?(link_params[:url])
    return no_title_error unless has_title?
    link.update_attributes(link_params)
    flash[:success] = "Link Changed!"
    redirect_to links_path
  end

  private

    def link_params
      params.require(:link).permit(:title, :url)
    end

    def invalid_url_error
      flash[:warning] = "Invalid Url Bro!"
      redirect_to links_path
    end

    def no_title_error
      flash[:warning] = "You need a title Bro!"
      redirect_to links_path
    end

    def has_title?
      link_params[:title].chomp != "" ? true : false
    end
end
