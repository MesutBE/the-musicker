const express = require('express');
const db = require('./db-connection');

const router = express.Router();

router.get('/', (req, res) => {
  // SELECT name FROM sqlite_master where type='table'
  const sql = `SELECT name FROM sqlite_master where type='table'`;

  db.all(sql, (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json(rows);
  });
});

router.use('/artists', require('./artists'));

// router.use('/albums', require('./albums'));
// router.use('/genres', require('./genres'));
// router.use('/media-types', require('./media-types'));
// router.use('/playlists', require('./playlists'));
// router.use('/tracks', require('./tracks'));


module.exports = router;
