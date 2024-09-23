const express = require('express');

const router = express.Router();
const jamaica = require("../controller/jamaica");

router.get('/', jamaica.index);
router.get('/music/songs', jamaica.songs);
router.get('/music/playlist', jamaica.playlist);
router.get('/music/albums', jamaica.albums);
router.get('/music/artist', jamaica.artist);

module.exports = router;