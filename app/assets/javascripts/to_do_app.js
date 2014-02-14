window.ToDoApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    ToDoApp.tasks = new ToDoApp.Collections.Tasks({});
    ToDoApp.tasks.fetch({
      success: function(){
        new ToDoApp.Routers.Tasks();
        Backbone.history.start();
      }
    });
  }
};

$(document).ready(function(){
  ToDoApp.initialize();
});
