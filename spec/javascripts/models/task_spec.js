describe("Task Model", function(){  
  describe("Initialization", function(){
    beforeEach(function(){
      this.task = new ToDoApp.Model.Task({description: "first task"});
    })
    it("should default the status to be incomplete", function(){
      expect(this.task.get("complete")).toBe(false);
    })
    it("should not accept empty string for the description", function(){
      this.task.set("description", "");
      expect(this.task.validate()).toEqual("cannot have an empty task description");
    })
  })
  
  describe("urls", function(){
    beforeEach(function(){
      this.task = new ToDoApp.Model.Task({description: "first task"});
    })
    describe("when no id is set", function(){
      it("should return /tasks as URL", function(){
        expect(this.task.url()).toEqual("/api/tasks");
      })
    })
    describe("when id is set", function(){
      this.task.id = 1;
      expect(this.taks.url()).toEqual("/api/tasks/1");
    })
  })
  
  describe("attributes", function(){
    beforeEach(function(){
      this.task = new ToDoApp.Model.Task({description: "first task"});
      this.save_stub = sinon.stub(this.task, "save");
    })
    afterEach(function(){
      this.save_stub.restore();
    })
    it("should support setting a non-empty description", function(){
      this.task.set("description", "New Task");
      expect(this.task.get("description")).toEqual("New Task");
    })
    it("should support toggling the status", function(){
      this.task.toggleStatus;
      expect(this.task.get("complete")).toEqual(true);
    })
  })
  
  describe("Saving", function(){
    beforeEach(function(){
      this.task = new ToDoApp.model.Task({description: "first task", id: 2});
      this.save_stub = sinon.stub(this.task, "save");
    })
    afterEach(function(){
      this.save_stub.restore();
    })
    it("should update server when description is changed", function(){
      this.todo.set("description", "New task");
      expect(this.save_stub).toHaveBeenCalledOnce;
      expect(this.todo.get("description")).toEqual("New task");
    })
    it("should update server when status is changed", function(){
      this.todo.set("complete", "true");
      expect(this.save_stub).toHaveBeenCalledOnce;
      expect(this.todo.get("complete")).toEqual(true);
    })
  })
})