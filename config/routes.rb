Nucmic::Application.routes.draw do

  match "send-sms" => "nucleus#sms_trigger", :as => :sms_trigger

  root :to => "nucleus#index"
  
end
