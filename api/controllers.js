const db = require('./db-connection');

const controllers = {
  getInit: (req, res) => {
    // SELECT name FROM sqlite_master where type='table'
    const sql = `SELECT name FROM sqlite_master where type='table'`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      res.json(rows);
    });
  },
  getAllArtists: (req, res) => {

    const sql = `SELECT ar.artistId, ar.Name FROM artists as ar`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
console.log(rows);

      res.json(rows)
    });
  },
  getAllAlbums: (req, res) => {

    const sql = `SELECT a.ArtistId, a.title FROM albums as a`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  getAllTracks: (req, res) => {

    const sql = `
      SELECT t.AlbumId, t.Name 
      FROM tracks as t
      LIMIT 10
      `;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  getAllPlaylists: (req, res) => {

    const sql = `SELECT * FROM playlists`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  artistId: (req, res) => {
    console.log(req.params.id);

    const sql = `
      SELECT t.Name, al.Title
      FROM albums as al, tracks as t, artists as ar
      WHERE al.ArtistId = ar.ArtistId 
        AND al.AlbumId = t.AlbumId 
        AND ar.ArtistId="${req.params.id}"
    `;
    
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
console.log(rows);

      res.json(rows)
    });
  },
  tracksId: (req, res) => {
    console.log(req.params.id);

    const sql = `
      SELECT t.Name, al.title
      FROM tracks as t, albums as al
      WHERE t.albumid="${req.params.id}"
        AND t.albumid = al.albumid
    `;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      console.log(rows);

      res.json(rows)
    });
  },
  playlistsId: (req, res) => {
    console.log(req.params.id);

    const sql = `
      SELECT t.name
      FROM playlists as p, playlist_track as pt, tracks as t
      WHERE  p.playlistid="${req.params.id}" and  p.playlistid=pt.playlistid and pt.trackid = t.trackid
      LIMIT 10;
    `;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      console.log(rows);

      res.json(rows)
    });
  },
  deletePlaylist: (req, res) => {
    const id = req.params.id;

    const sql = `
      DELETE FROM playlists
      WHERE PlaylistId = "${Number(id)}"
      `;
    console.log(sql);

    db.run(sql, function (err) {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      // console.log(this);

      res.json({ message: `Row(s) deleted: ${this.changes}` });
    });

  },
  create: (req, res) => {
    // read row data from body
    const dataStringified = JSON.stringify(req.body);
    const dataParsed = JSON.parse(dataStringified);

    const sql = `
      INSERT INTO artists (Name)
      VALUES ("${dataParsed.Name}")
      `;

    // Sample body for request
    // {
    //   "Name": "new artist"
    // }

    db.run(sql, function (err) {
      if (err) {

        res.status(400).json({ "error": err.message });
        return; a
      }
      res.json({
        message: `A row has been inserted with ArtistId: ${this.lastID}`});
    });

  },
  // update: (req, res) => {
  //   // read row data from body
  //   const id = req.params.id;
  //   const dataStringified = JSON.stringify(req.body);
  //   const dataParsed = JSON.parse(dataStringified);
  //   const sql = `
  //     UPDATE artists
  //     SET Name = "${dataParsed.Name}"
  //     WHERE ArtistId = ${Number(id)}
  //     `;

  //   // Sample body for request
  //   // {
  //   //   "Name": "new artist"
  //   // }
  //   db.run(sql, function (err) {
  //     if (err) {
  //       res.status(400).json({ "error": err.message });
  //       return;
  //     }
  //     //return the last id if the table 
  //     res.json({ message: `Row(s) updated: ${this.changes}` });
  //   });


  // }
}

module.exports = controllers;
