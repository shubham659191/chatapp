Rails.application.routes.draw do
  get 'users/show'
  resources :rooms do
    resources :messages
  end

  get 'user/:id', to: 'users#show'

  root 'pages#home'
  devise_for :users

  devise_scope :user do
    get 'users', to: 'devise/sessions#new'
  end
  get 'user/:id', to: 'user#show', as: 'user'
end
