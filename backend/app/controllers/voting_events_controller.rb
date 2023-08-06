class VotingEventsController < ApplicationController
  include CurrentUserConcern
  before_action :find_voting_event, only: [:show, :update, :destroy]

  def index
    @voting_events = VotingEvent.all
    render json: @voting_events, include: :user
  end

  # GET /voting_events/:id
  def show
    voting_event = VotingEvent.find_by(id: params[:id])

    if voting_event
      render json: voting_event.as_json(include: :user)
    else
      render json: { error: "Voting event not found" }, status: :not_found
    end
  end


  def create
    voting_event = VotingEvent.new(voting_event_params)

    if voting_event.save
      render json: voting_event, status: :created
    else
      render json: { errors: voting_event.errors.full_messages }, status: :unprocessable_entity
    end
  end



  def update
    if @current_user && @voting_event.update(voting_event_params)
      render json: @voting_event.as_json(include: :user)
    elsif @current_user.nil?
      render json: { error: "Unauthorized, please log in to update a voting event" }, status: :unauthorized
    else
      render json: { errors: @voting_event.errors.full_messages }, status: :unprocessable_entity
    end
  end


  def destroy
    if @current_user && @voting_event.destroy
      render json: { message: "Voting event was successfully destroyed" }, status: :ok
    elsif @current_user.nil?
      render json: { error: "Unauthorized, please log in to delete a voting event" }, status: :unauthorized
    else
      render json: { errors: @voting_event.errors.full_messages }, status: :unprocessable_entity
    end
  end


  private
  # def find_voting_event
  #   @voting_event = VotingEvent.find(params[:id])
  # rescue ActiveRecord::RecordNotFound
  #   render json: { error: 'Voting event not found' }, status: :not_found
  # end

  def find_voting_event
    @voting_event = VotingEvent.includes(:user).find_by(id: params[:id])

    if @voting_event.nil?
      render json: { error: 'Voting event not found' }, status: :not_found
    end
  end

  def voting_event_params
    params.require(:voting_event).permit(:name, :date, :user_id)
  end
end