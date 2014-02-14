describe("Tasks Collection", function(){
  it("should support initialization with multiple tasks", function(){
    this.tasks = new ToDoApp.Collections.Tasks([
      {description: "first task"},
      {description: "second task"}
    ])
    expect(this.tasks.length).toEqual(2);
  })
})