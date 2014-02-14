describe("Task Model", function(){  
  describe("Initialization", function(){
    beforeEach(function(){
      this.task = new ToDoApp.Models.Task({description: "first task"});
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
      this.task = new ToDoApp.Models.Task({description: "first task"});
    })
    describe("when no id is set", function(){
      it("should return /tasks as URL", function(){
        expect(this.task.url()).toEqual("/api/tasks");
      })
    })
    describe("when id is set", function(){
      it("should return /tasks/1 as URL", function(){
        this.task.id = 1;
        expect(this.task.url()).toEqual("/api/tasks/1");
      })
    })
  })
  
  describe("Attributes", function(){
    beforeEach(function(){
      this.task = new ToDoApp.Models.Task({description: "first task"});
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
      this.task.set("complete", true);
      expect(this.task.get("complete")).toEqual(true);
    })
  })
  
  describe("Saving", function(){
    beforeEach(function(){
      this.task = new ToDoApp.Models.Task({description: "first task", id: 2});
      this.saveStub = sinon.stub(this.task, "save");
    })
    afterEach(function(){
      this.saveStub.restore();
    })
    it("should update server when description is changed", function(){
      this.task.set("description", "New task");
      expect(this.saveStub).toHaveBeenCalledOnce;
      expect(this.task.get("description")).toEqual("New task");
    })
    it("should update server when status is changed", function(){
      this.task.set("complete", true);
      expect(this.saveStub).toHaveBeenCalledOnce;
      expect(this.task.get("complete")).toEqual(true);
    })
  })
})