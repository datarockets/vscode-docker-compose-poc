FROM ruby:3.0-buster

RUN gem install ruby-debug-ide
RUN gem install debase

WORKDIR /app

RUN bundle config set --local path 'vendor/bundle'
