source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.1'

# Rails framework
gem 'rails', '~> 5.2.6'

# Database
gem 'pg', '>= 0.18', '< 2.0'

# Server
gem 'puma', '~> 3.11'

# Asset pipeline
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'

# JSON APIs
gem 'jbuilder', '~> 2.5'

# Authentication
gem 'bcrypt', '~> 3.1.7'

# AWS S3
gem 'aws-sdk-s3'

# Caching
gem 'bootsnap', '>= 1.1.0', require: false

# Utilities
gem 'jquery-rails'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'pry-rails'
  gem 'annotate'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
