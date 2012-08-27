class NucleusController < ApplicationController
  
  def index
    
    if params["thankyou"]   
      @thankyou = params["thankyou"]
    end
    
  end
  
end
