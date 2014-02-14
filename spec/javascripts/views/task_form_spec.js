describe("Task Form View", function(){
  beforeEach(function(){
    this.tasks = new ToDoApp.Collections.Tasks();
    this.taskForm = new ToDoApp.Views.TaskForm({
      model: new ToDoApp.Models.Task(),
      collection: this.tasks
    });
    this.taskForm.render();
  })
  
  describe("Template", function(){
    it("should render as a form", function(){
      expect(this.taskForm.el.nodeName).toEqual("FORM");
    })
    it("should contain an input box to enter description", function(){
      expect(this.taskForm.$el.find("#description_input").length).toEqual(1);
    })
    it("should also have a submit button", function(){
      expect(this.taskForm.$el.find("#add_task").length).toEqual(1);
    })
  })
  
  describe("Events hash", function(){
    it("should call submit when submit button is clicked", function(){
      expect(this.taskForm.events["click #add_task"]).toMatch(/submit/);
    })
  })
  
  describe("Adding a task", function(){
    beforeEach(function(){
      this.submitStub = sinon.stub(this.taskForm, "submit");
      this.createStub = sinon.stub(this.tasks, "create");
    })
    afterEach(function(){
      this.submitStub();
    })
    it("collection should have a model", function(){
      this.taskForm.$("#description_input").val("New Task");
      this.taskForm.trigger("submit");
      expect(this.saveStub).toHaveBeenCalledOnce;
      expect(this.createStub).toHaveBeenCalledOnce;
    })
  })
  
})