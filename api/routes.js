const express = require('express');
const controllers = require('./controllers.js');

const router = express.Router();

router.get('/', controllers.getInit);
router.get('/artists', controllers.getAllArtists);
router.get('/albums', controllers.getAllAlbums);
router.get('/tracks', controllers.getAllTracks);
router.get('/playlists', controllers.getAllPlaylists);

router.get('/artists/:id', controllers.artistId);
module.exports = router;
