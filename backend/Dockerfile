FROM ruby:2.6.5

# for rails v6
# RUN apt-get update -qq && apt-get install -y nodejs yarnpkg
# RUN ln -s /usr/bin/yarnpkg /usr/bin/yarn

# for rails v5
RUN apt-get update -qq && \
    apt-get install -y build-essential \
                       libpq-dev \
                       nodejs
RUN mkdir /hippy
WORKDIR /hippy
COPY Gemfile /hippy/Gemfile
COPY Gemfile.lock /hippy/Gemfile.lock
RUN bundle install -j4
COPY . /hippy

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]