class Api::ReservationsController < ApplicationController
 
  
    def index
      if params[:userId]
         @reservations = User.find(params[:userId]).reservations
      else
        @reservations = Reservation.all
      end
      render :index
    end
  
    def show
        @reservation = Reservation.find(params[:id])
        render :show
    end
  
    def create 
        @reservation = Reservation.new(reservation_params)
        if @reservation.save
          render :show
        else
          render json: @reservation.errors.full_messages, status: 401
        end
      end

      def update
        @reservation = Reservation.update(booking_params)
        if @reservation
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end
  
    def destroy 
      @reservation = Reservation.find(params[:id])
      @reservation.delete!
      render :show
    end
  
  
    def reservation_params
      params.require(:reservation).permit(:start_date, :end_date, :stay_id, :user_id)
    end
  end