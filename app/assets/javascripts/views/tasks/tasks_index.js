ToDoApp.Views.TasksIndex = Backbone.View.extend({
  template: JST['tasks/index'],
  
  events: {
    "click .delete_task": "deleteTask",
    "click input[type='checkbox']": "toggleStatus"
  },
  
  initialize: function(){
    this.listenTo(this.collection, "add remove", this.render.bind(this));
  },
  
  render: function(){
    var renderedContent = this.template({tasks: this.collection});
    this.$el.html(renderedContent);
    $("#tasks").scrollTop($("#tasks")[0].scrollHeight);
    return this;
  },
  
  toggleStatus: function(event){
    var $taskDiv = $(event.target).closest(".task").first();
    var $description = $taskDiv.find(".description");
    var task = this.collection.get($(event.target).data("id"));
    task.save({"complete": !task.get("complete")}, {
      success: function(model, response, options){
        $description.toggleClass("complete");
      }
    })
  },
  
  deleteTask: function(event){
    event.preventDefault();
    var $taskDiv = $(event.target);
    var task = this.collection.get($taskDiv.data("id"));
    task.destroy();
  }

});
