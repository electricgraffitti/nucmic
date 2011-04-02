class NucleusController < ApplicationController
  
  def index
    
  end
  
  def sms_trigger
    
    10.times do 
      General.sms_agent.deliver
    end
    
  end
  
end
