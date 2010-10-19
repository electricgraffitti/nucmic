class ApplicationController < ActionController::Base
  protect_from_forgery
  
  
  helper :all
  helper_method :super?, :super_admin
  filter_parameter_logging :password, :password_confirmation
    
    
    protected

    def super_admin
     unless super? 
       return false
     end
    end

    def super?
      authenticate_or_request_with_http_basic do |username, password|
        username == APP_CONFIG['username'] && password == APP_CONFIG['password']
      end
    end
  
end
