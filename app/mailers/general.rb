class General < ActionMailer::Base  
  
  def sms_agent
    # ActionMailer delivery
    #sms_fu = SMSFu::Client.configure(:delivery => :action_mailer)

    # Pony delivery via Sendmail
    # sms_fu = SMSFu::Client.configure(:delivery => :pony, :pony_config => { :via => :sendmail })

    # Pony delivery via SMTP
    pc = {
      :via => :smtp,
      :via_options => {
        :address              => 'smtp.gmail.com',
        :port                 => '587',
        :user_name            => 'cube2media@gmail.com',
        :password             => 'coffee*8',
        :authentication       => :plain,
        :enable_starttls_auto => true,
        :domain               => "gmail.com"
    }}
    
    sms_fu = SMSFu::Client.configure(:delivery => :pony, :pony_config => pc)
    
    
    
    sms_fu.deliver("8014556334","verizon","hangover")
    #sms_fu.deliver("7028352823","at&t","testing Bobs Awesome auto-texter")
    #sms_fu.deliver("8013814974","at&t","testing Bobs Awesome auto-texter")
  end
  
  
end
