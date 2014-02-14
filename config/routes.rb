ToDoApp::Application.routes.draw do
  namespace :api do
    resources :tasks
  end
  
  root to: "api/tasks#index"
end
