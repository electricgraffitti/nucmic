class ApplicationController < ActionController::Base
  protect_from_forgery
  
  
  helper :all
  helper_method :super?, :super_admin, :ipad, :box_video
  filter_parameter_logging :password, :password_confirmation
    
    
    def box_video(box_type)
      case box_type
        when "green_video"
          green_video
        when "red_video"
          red_video
        when "blue_video"
          blue_video
        when "yellow_video"
          yellow_video
        else
          main_video
      end
    end
    
    private
    
    def ipad
      # request.user_agent =~ /iPad/i || request.user_agent =~ /iPhone/i
      request.user_agent =~ /(Mobile\/.+Safari)/      
    end
    
    def main_video
      if ipad
        video = "/videos/nucleus_teaser.f4v"
      else
        video = "/videos/nucleus_teaser.f4v"
      end
    end
    
    def red_video
      if ipad
        video = "/videos/nucleus_1.f4v"
      else
        video = "/videos/nucleus_1.f4v"
      end
    end
    
    def blue_video
      if ipad
        video = "/videos/nucleus_2.f4v"
      else
        video = "/videos/nucleus_2.f4v"
      end
    end
    
    def yellow_video
      if ipad
        video = "/videos/nucleus_3.f4v"
      else
        video = "/videos/nucleus_3.f4v"
      end
    end
    
    def green_video
      if ipad
        video = "/videos/nucleus_4.f4v"
      else
        video = "/videos/nucleus_4.f4v"
      end
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
