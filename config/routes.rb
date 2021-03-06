# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :products,  only: [:index, :show, :create, :update, :destroy]
    resources :boughtitems, only: [:show, :create, :destroy]
    resource :cart, only: [:show]
    resources :search, only: [:index]
    resources :recentviews, only: [:index, :create]
    resources :reviews, only: [:create, :update, :destroy]
    resource :location, only: [:create]
  end
end
