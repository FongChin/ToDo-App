ToDoApp.Collections.Tasks = Backbone.Collection.extend({
  model: ToDoApp.Models.Task,
  url: "/api/tasks"
});
