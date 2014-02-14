require 'spec_helper'

describe Task do
  context "saves valid task successfully" do
    it "saves a valid task" do
      task = Task.create!(description: "Run 2 miles a day")
      expect(task.description).to eq("Run 2 miles a day")
      expect(task.completed?).to eq(false)
    end
    it "allows true value for completed" do
      task = Task.create!(description: "Run 5 miles a day", complete: true)
      expect(task.completed?).to eq(true)
    end
  end
  
  context "without description" do
    it "validates presence of task description" do
      expect(Task.new).not_to be_valid
    end
  end
end
