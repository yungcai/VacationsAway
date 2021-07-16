class Api::ReviewsController < ApplicationController 
    

    def index 
        @reviews = Review.includes(:user).find_by_stay_id(params[:stay_id])
        render :index
    end

    def create
        # debugger
        @user = current_user
        @review = Review.new(stay_id:params[:review][:stay_id], 
        description:params[:review][:description], 
        star_rating: params[:review][:star_rating],
        user_id: current_user.id
        )

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 404
        end
    end



    def update 
        
        @review = Review.find_by(id:params[:id])
        # debugger
        if @review && @review.update(
            description: params[:review][:description],
            star_rating: params[:review][:star_rating]
        )
        render :show 
        else  
            render json: @review.errors.full_messages, status: 422 
        end
    end

    def destroy 
        @review = Review.find_by(id:params[:id])
        if @review && @review.destroy 
            render :show 
        else
            render @review.errors.full_messages, status: 422 
        end
    end

    def review_params 
        params.require(:review).permit(:user_id, :stay_id, :description, :star_rating)
    end
end