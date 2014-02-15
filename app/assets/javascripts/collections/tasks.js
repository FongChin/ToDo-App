ToDoApp.Collections.Tasks = Backbone.Collection.extend({
  model: ToDoApp.Models.Task,
  url: "/api/tasks",
  comparator: function(task1, task2) {
    var a = task1.get("created_at");
    var b = task2.get("created_at");
    return (a < b) ? 1 : -1;
  }
});
