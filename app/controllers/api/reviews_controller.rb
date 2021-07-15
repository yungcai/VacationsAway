class Api::ReviewsController < ApplicationController 
    

    def index 
        @reviews = Review.includes(:user).find_by_stay_id(params[:stay_id])
        render :index
    end

    def create 
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 404 
        end

    end



    def update 
    end

    def destroy 
    end

    def review_params 
        params.require(:review).permit(:user_id, :stay_id, :description, :star_rating)
    end
end