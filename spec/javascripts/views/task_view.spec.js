// describe("Task View", function(){
//   beforeEach(function(){
//     this.task = new ToDoApp.Model.Task({description: "first task"});
//     this.taskView = new ToDoApp.Views.TaskView({model: this.task});
//     this.save_stub = sinon.stub(this.task, "save");
//   })
//   afterEach(function(){
//     this.save_stub.restore();
//   })
//   it("#render should return the view object", function(){
//     expect(this.taskView.render()).toEqual(this.taskView);
//   })
//   
//   describe("Events Hash", function(){
//     it("should listen to double click on task description", function(){
//       expect(this.taskView.events["dblclick .description"]).toMatch(/edit/);
//     })
//     it("should listen to blur event on task description input box", function(){
//       expect(this.taskView.events["blur .description"]).toMatch(/save/);
//     })
//   })
//   
//   describe("Template", function(){
//     beforeEach(function(){
//       this.taskView.render();
//     })
//     it("should contain the task description", function(){
//       expect(this.taskView.$el.text()).toEqual("first task");
//     })
//     it("should contain the input checkbox for status", function(){
//       expect(this.taskView.$el.find("input[type='checkbox']").length).toEqual(1);
//     })
//     it("checkbox shouldn't be checked by default", function(){
//       expect(this.taskView.$el.find("input[type='checkbox']").is(":checked")).toBe(false);
//     })
//     it("checkbox should be checked if a task is completed", function(){
//       this.task.set("complete", true);
//       this.task.render();
//       expect(this.taskView.$el.find("input[type='checkbox']").is(":checked")).toBe(true);
//     })
//   })
//   
//   describe("Interaction With Model", function(){
//     it("should update model when checkbox is clicked", function(){
//       this.task.$el.find("input[type='checkbox']").click();
//       expect(this.task.get('complete')).toEqual(true);
//     })
//   })
// })