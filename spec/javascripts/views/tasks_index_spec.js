describe("Task Index View", function(){
  beforeEach(function(){
    this.tasks = new ToDoApp.Collections.Tasks([
      {description: "first task"},
      {description: "second task"}
    ])
    this.tasksIndexView = new ToDoApp.Views.TasksIndexView({collection: this.tasks});
    this.save_stub = sinon.stub(this.task, "save");
  })
  afterEach(function(){
    this.save_stub.restore();
  })
  
  it("#render should return the view object", function(){
    expect(this.tasksIndexView.render()).toEqual(this.tasksIndexView);
  })
  
  it("#render render a div", function(){
    expect(this.tasksIndexView.render().el.nodeName).toEqual("div");
  })
  
  it("should render all tasks in the collection", function(){
    this.tasksIndexView.render();
    expect(this.tasksIndexView.$el.find("div.task").length).toEqual(2);
  })
  
})