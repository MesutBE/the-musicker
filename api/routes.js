const express = require('express');
const controllers = require('./controllers.js');

const router = express.Router();

router.get('/', controllers.getInit);

router.get('/artists', controllers.getAllArtists);

module.exports = router;
