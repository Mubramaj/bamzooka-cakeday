after_initialize do
  module ::BamzookaCakeday
    class Engine < ::Rails::Engine
      isolate_namespace BamzookaCakeday
    end
  end

  ::BamzookaCakeday::Engine.routes.draw do
    get 'birthdays', to: 'birthdays#index'
  end

  Bamzooka::Application.routes.append do
    mount ::BamzookaCakeday::Engine, at: '/bamzooka-cakeday'
  end

  class ::Jobs::ExampleJob < Jobs::Scheduled
    every 30.minutes

    def execute(args)
      logger.info "Bamzooka cakeday job running now..."
    end
  end

  load File.expand_path('../app/controllers/birthdays_controller.rb', __FILE__)

end
