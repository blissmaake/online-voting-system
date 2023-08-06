class FeedbacksController < ApplicationController
  include CurrentUserConcern
  before_action :set_feedback, only: [:show, :update, :destroy]

  def index
    @feedbacks = Feedback.all
    render json: @feedbacks
  end

  

  def create
    if @current_user
      @feedback = @current_user.feedbacks.build(feedback_params)

      if @feedback.save
        render json: @feedback, status: :created
      else
        render json: { errors: @feedback.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Unauthorized, please log in to create a feedback" }, status: :unauthorized
    end
  end

  

  def destroy
    if @current_user && @feedback.destroy
      render json: { message: "Feedback was successfully destroyed" }, status: :ok
    elsif @current_user.nil?
      render json: { error: "Unauthorized, please log in to delete a feedback" }, status: :unauthorized
    else
      render json: { errors: @feedback.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def set_feedback
    @feedback = Feedback.find_by(id: params[:id])
    render json: { error: "Feedback not found" }, status: :not_found unless @feedback
  end

  def feedback_params
    params.require(:feedback).permit(:eventName, :message)
  end
end
