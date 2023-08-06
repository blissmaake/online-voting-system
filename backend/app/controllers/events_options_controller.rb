class EventsOptionsController < ApplicationController
  before_action :set_events_option, only: [:show, :edit, :update, :destroy]

  def index
    @events_options = EventsOption.all
    render json: @events_options
  end

  def show
    render json: @events_option
  end

  def new
    @events_option = EventsOption.new
  end

  def edit
  end

  def create
    @events_option = EventsOption.new(events_option_params)

    if @events_option.save
      render json: @events_option, status: :created, location: @events_option
    else
      render json: @events_option.errors, status: :unprocessable_entity
    end
  end

  def update
    if @events_option.update(events_option_params)
      render json: @events_option
    else
      render json: @events_option.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @events_option.destroy
    render json: { message: "Events option successfully deleted" }, status: :ok
  end

  private

  def set_events_option
    @events_option = EventsOption.find(params[:id])
  end

  def events_option_params
    params.require(:events_option).permit(:options, :eventName, :voting_event_id)
  end
end
