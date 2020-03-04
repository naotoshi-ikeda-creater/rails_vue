## docker-rails-vue-development

### Setup

#### backend

After cloning this repository, initialize backend app (rails).
Make sure you are on the root directory.


```sh
# You can change the name of your local directory.
$ cd .. && mv boiler-rails-vue-docker newName

# then initialize.
$ docker-compose run --rm --no-deps backend rails new . --api -T -d mysql -f --skip-bundle
```

edit `backend/config/database.yml`

```
default: &default
  adapter: mysql2
  encoding: utf8
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  username: root
  password: password
  host: mysql
```

#### frontend

Next, create frontend app (Vue).
Make sure you are on the root directory.

```sh
# initialize(@vue/cli).
$ docker-compose run --rm --no-deps frontend vue create .

# you will get tons of questions about the project.
# below is my config example.


Your connection to the default yarn registry seems to be slow.
   Use https://registry.npm.taobao.org for faster installation? (Y/n) y

Vue CLI v4.2.3
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, Linter
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a linter / formatter config: Airbnb
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
? Pick the package manager to use when installing dependencies: NPM
```

```sh
# if you want to initialize app with nuxt.js, then execute this command.
$ docker-compose run --rm --no-deps frontend npx create-nuxt-app  .
```

#### build

```sh
# build and activate the servers.
$ docker-compose build && docker-compose up -d

# make sure your containers are up.
$ docker-compose ps

# create development and test databases.
$ docker-compose exec backend rails db:create
```

⭐️You are now ready to go!⭐️

Go to [localhost:3000](http://localhost:3000), [localhost:8080](http://localhost:8080)
