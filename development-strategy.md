#  The Musicker: Development Strategy

Building this site one step at a time.

## 0. Setup

* Fork the [the-musicker](https://github.com/HackYourFutureBelgium/the-musicker).

Deploy app using Heroku.

* create `Procfile` that includes
`web: node index.js`
* If you will use gitKraken be sure to open it before creating remote branch `heroku`.  
* type to terminal `heroku create restful-chinook`
* type to terminal `git push heroku master`
* (optional)Go to heroku page in the browser and then add `Config Vars` => `NODE_ENV: production`
* Be sure `../config/production.js` includes all of the followings:
```javascript
module.exports = {
  MODE: 'production',
  PORT: process.env.PORT,
  DB_PATH: 'db/chinook.sqlite'
};
```

## 2. User Stories
1. A user can visit a home page with an overview and links to the other pages

1. A user can see a list of all artists
1. A user can see a list of all albums
1. A user can see a list of all songs
1. A user can see a list of all playlists
1. A user can click on one artist to see all the albums by that artist, with the songs for each album listed
1. A user can click on one song to see all the albums by that artist, with the songs for each album listed
1. A user can click on one playlist to see all songs in that playlist
1. A user can delete a playlist
1. A user can remove songs from an existing playlist

1. A user can add songs to an existing playlist
1. A user can create a new playlist

## 2. Write a Frontend

If you have finished the API and are looking for a challenge, write a frontend!  No suggestions from us, impress yourself :)

## 3. Complete README.md

* Complete README.md for more details about the project.