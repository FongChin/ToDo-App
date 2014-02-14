describe("Tasks Collection", function(){
  beforeEach(function(){
    this.tasks = new ToDoApp.Collections.Tasks([
      {description: "first task"},
      {description: "second task"}
    ])
  })
  it("should support initialization with multiple tasks", function(){
    expect(this.tasks.length).toEqual(2);
  })
  it("has the correct url defined", function(){
    expect(this.tasks.url).toEqual("/api/tasks");
  })
  it("has the correct model defined", function(){
    expect(this.tasks.model).toEqual(ToDoApp.Models.Task);
  })
})