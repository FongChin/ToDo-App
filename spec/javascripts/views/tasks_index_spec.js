describe("Task Index View", function(){
  beforeEach(function(){
    this.tasks = new ToDoApp.Collections.Tasks([
      {description: "first task", id: 1},
      {description: "second task", id: 2}
    ]);
    this.tasksIndex = new ToDoApp.Views.TasksIndex({collection: this.tasks});
    this.tasksIndex.render();
  })
  
  describe("#render", function(){
    it("should return the view object", function(){
      expect(this.tasksIndex.render()).toEqual(this.tasksIndex);
    })

    it("render a div", function(){
      expect(this.tasksIndex.el.nodeName).toEqual("DIV");
    })

    it("render all tasks in the collection", function(){
      this.tasksIndex.render();
      expect(this.tasksIndex.$el.find("div.task").length).toEqual(2);
    })
  })
  
  describe("Toggling task's status", function(){
    beforeEach(function(){
      this.toggleStatusStub = sinon.stub(this.tasksIndex, "toggleStatus");
    })
    afterEach(function(){
      this.toggleStatusStub.restore();
    })
    it("should be able to find two checkboxes", function(){
      expect(this.tasksIndex.$el.find("input[type='checkbox']").length).toEqual(2);
    })
    
    it("clicking the checkbox should toggle the complete status", function(){
      this.tasksIndex.$el.find("input[type='checkbox']").first().click();
      expect(this.toggleStatusStub).toHaveBeenCalledOnce;
    })
  })
  
  describe("Deleting a task", function(){
    beforeEach(function(){
      this.task = this.tasks.get(1);
      this.deleteStub = sinon.stub(this.task, "destroy");
    })
    afterEach(function(){
      this.deleteStub.restore();
    })
    it("should be able to find two .delete_task buttons", function(){
      expect(this.tasksIndex.$el.find(".delete_task").length).toEqual(2);
    })
    
    it("clicking .delete_task should remove the task in collection", function(){
      this.tasksIndex.$el.find(".delete_task").first().click();
      expect(this.deleteStub).toHaveBeenCalledOnce;
    })
  })
})