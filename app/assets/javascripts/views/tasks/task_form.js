ToDoApp.Views.TaskForm = Backbone.View.extend({
  template: JST["tasks/form"],

  tagName: "form",

  events: {
    "click #add_task": "submit"
  },
  
  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },
  
  submit: function(event){
    event.preventDefault();
    var data = this.$el.serializeJSON();
    if (data["task"]["description"] == ""){
      return
    }
    var $descriptionInput = this.$("#description_input");
    this.collection.create(data["task"], {
      wait: true,
      success: function(){
        $descriptionInput.val("");
        $descriptionInput.focus();
      }
    });
  }
})