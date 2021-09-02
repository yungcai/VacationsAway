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
      @reservations = Reservation.all
      render :index 
    end
  
    def show
        @reservation = Reservation.find(params[:id])
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
    #         render json: @booking.errors.full_messages, status: 422
    #     end
    # end
  
    def destroy 
      @reservation = Reservation.find(params[:id])
      if @reservation.destroy
        render :show
      else 
        render json: @reservation.errors.full_messages, status: 404
      end
    end
  
  
    def reservation_params
      params.require(:reservation).permit(:start_date, :end_date, :stay_id, :user_id)
    end
  end