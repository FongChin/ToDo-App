class Api::TasksController < ApplicationController
  def create
    @task = Task.new(params[:task])
    if @task.save
      render json: @task
    else
      render json: {status: :unprocessable_entity, error: @task.errors.full_messages}
    end
  end
  
  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render json: {status: :ok}
  end
  
  def update
    @task = Task.find(params[:id])
    if @task.update_attributes(params[:task])
      render json: @task
    else
      render json: {status: :unprocessable_entity, error: @task.errors.full_messages}
    end
  end
  
  def index
    render json: Task.all
  end
end
