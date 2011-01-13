class NucleusController < ApplicationController
  
  def index
    
    if params["pardot"]      
      @pardot = params["pardot"]
    end
    
  end
  
end
