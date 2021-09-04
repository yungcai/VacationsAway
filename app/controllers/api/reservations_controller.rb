class Api::ReservationsController < ApplicationController

  # before_action :require_logged_in
 
  
    # def index
    #   if params[:userId]
    #      @reservations = User.find(params[:userId]).reservations
    #   else
    #     @reservations = Reservation.all
    #   end
    #   render :index
    # end

    def index
      @reservations = if params[:user_id]
      Reservation.includes(:stay).where(user_id: params[:user_id])
      else
          Reservation.includes(:stay).all
      end
      render :index
  end
  
    def show
      @reservations = Reservation.all.includes(:user, :stay).where(user_id: params[:id])
      render :show
  end


    def create
        @reservation = Reservation.new(reservation_params)
        @reservation.user_id = current_user.id
        if @reservation.save
          render :show
        else
          render json: @reservation.errors.full_messages, status: 422
        end
      end

    #   def update
    #     @reservation = Reservation.update(booking_params)
    #     if @reservation
    #         render :show
    #     else
    #         render json: @reservation.errors.full_messages, status: 422
    #     end
    # end
  
    def destroy
      @reservation = Reservation.find(params[:id])
      @reservation.destroy
      render json: @reservation
    end

  
  
    def reservation_params
      params.require(:reservation).permit(:start_date, :end_date, :stay_id, :user_id)
    end
  end