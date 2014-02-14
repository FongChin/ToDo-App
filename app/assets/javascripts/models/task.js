ToDoApp.Models.Task = Backbone.Model.extend({
  defaults: {
    "complete": false
  },
  
  validate: function(){
    if (this.get("description") == ""){
      return "cannot have an empty task description"
    }
  },
  
  urlRoot: "/api/tasks"
});
