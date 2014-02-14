ToDoApp.Routers.Tasks = Backbone.Router.extend({
  routes: {
    "": "index"
  },
  
  index: function(){
    var tasksIndex = new ToDoApp.Views.TasksIndex({collection: ToDoApp.tasks});
    var taskForm = new ToDoApp.Views.TaskForm({
      model: new ToDoApp.Models.Task(), 
      collection: ToDoApp.tasks
    });
    $("#tasks").html(tasksIndex.render().$el);
    $("#tasks").scrollTop($("#tasks")[0].scrollHeight);
    $("#task_form").html(taskForm.render().$el);
  }
  
});
