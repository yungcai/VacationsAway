Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :new]
    resource :session, only: [:create, :destroy]
    resources :stays do
      resources :reviews, only:[:index, :create]
    end
    resources :reviews, only:[:update, :destroy]
    resources :reservations
    end
 
  root "static_pages#root"
end
