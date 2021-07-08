class Api:StaysController < ApplicationController 
    before_action :require_logged_in, only: [:create]

    def index 
        @stays = Stay.all 
        render :index

    end

    def create 
        @stay = Stay.new(stay_params)
        if @stay.save 
            render :show 
        else
            render json: @spots.errors.full_messages, status: 401 
        end
    end

    def show 
        @stay = Stay.find(params[:id])
        render :show
    end

    def update 
        @stay = Stay.find(params[:id])
        if stay.update(stay_params) 
            render :show 
        else
            render json: @stay.errors.full_messages, status: 401 
        end
    end

    def destroy 
        @stay = Stay.find(params[:id])
        @stay.delete!
        render :show
    end


    def stay_params
        params.require(:stay).permit(:price, :location, :lat, :long, :description)
    end

end
