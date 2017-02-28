# Hot Reads

## About

Url Lock box is the backend to our final assessment. The basic idea is that one can visit the site. (Linked below). Users can create an account and add links they wish to read. There is various javascript filtering that you can do on the links you add and you can mark them as read or unread. It will change the database accordingly. She don't look pretty but she meets spec.


## Setup

To run it:

```
git clone git@github.com:vidoseaver/lockbox2.git.git
cd lockbox2
rake db:create
rake db:migrate
rails s
visit http://localhost:3000/
```

To run the tests:
```
rspec
```

Productio links:
* [Hot box](https://mighty-cliffs-80459.herokuapp.com/) (front-end)
* [Lock box](https://warm-dawn-37097.herokuapp.com/) (back-end)


## Info

This app is written in Rails v5.0.0.1. Alot of the functionality is built in js with basic rails structure providing api end points.
The database is postgresql. Tests writtenin rspec-rails. Coverage provided by simplecov.
