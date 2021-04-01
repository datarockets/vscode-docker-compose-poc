require "bundler"

Bundler.require

get '/' do
  'Hello world from ruby!'
end

set :bind, "0.0.0.0"
