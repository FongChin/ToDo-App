ToDoApp::Application.routes.draw do
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)

  namespace :api do
    resources :tasks, only: [:create, :update, :destroy, :index]
  end
  root to: "static_pages#root"
end
