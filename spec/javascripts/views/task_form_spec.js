describe("Todo Form View", function(){
  describe("Template", function(){
    beforeEach(function(){
      this.taskFormView = new ToDoApp.Views.TaskFormView();
      this.taskFormView.render();
    })
    it("should render as a form", function(){
      expect(this.tasksIndexView.el.nodeName).toEqual("form");
    })
    it("should contain an input box to enter description", function(){
      expect(this.tasksIndexView.$el.find("input[id='description']").length).toEqual(1);
    })
    it("should also have a submit button", function(){
      expect(this.tasksIndexView.$el.find("#add_task").length).toEqual(1);
    })
  })
  
  describe("Events hash", function(){
    it("should call submit when submit button is clicked", function(){
      expect(this.tasksIndexView.events["click #add_task"]).toMatch(/submit/);
    })
  })
})