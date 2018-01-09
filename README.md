# Training chat

### Install ###

```sh
git clone https://github.com/ViktorPresniatski/training_chat.git
cd training_chat
rvm install 2.5.0
rvm gemset create trchat
gem install rails -v 5.1.4
bundle install
mv config/examples/database.yml config/    Change username and password for your own DB
```

### Run backend ###

```sh
bundle exec rails s
```

### Run Fronend ###

```sh
cd frontend
npm start
```
