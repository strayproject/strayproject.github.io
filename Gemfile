# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) { |repo_name| "https://github.com/#{repo_name}" }

gem "jekyll"
gem 'jekyll-seo-tag'

# webrick is not included in ruby 3.0 but we need it
gem 'webrick'

# these gems will stop being part of the default gems by 3.4.0
gem 'csv'
gem 'base64'

group :jekyll_plugins do
    gem 'jekyll-postcss-v2'
  end