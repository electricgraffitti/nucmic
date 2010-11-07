class ApplicationController < ActionController::Base
  protect_from_forgery
  
  
  helper :all
  helper_method :super?, :super_admin, :ipad, :green_video
  filter_parameter_logging :password, :password_confirmation
    
    
    def green_video
      if ipad
        video = "http://dl.dropbox.com/u/3105141/HCICDN/videos/meet_nucleus.mp4"
      else
        video = "http://dl.dropbox.com/u/3105141/HCICDN/videos/meet_nucleus.f4v"
      end
    end
    
    private
    
    def ipad
      # request.user_agent =~ /iPad/i || request.user_agent =~ /iPhone/i
      request.user_agent =~ /(Mobile\/.+Safari)/      
    end
    
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
