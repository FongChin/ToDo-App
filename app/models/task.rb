class Task < ActiveRecord::Base
  attr_accessible :complete, :description  
  validates_presence_of :description
  
  def completed?
    self.complete
  end
end
