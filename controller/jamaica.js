const jamaica = {
    index: (req, res) => {
        res.render('home', {title: 'MusicPlaylist'});
    },
    songs: (req, res) => {
        res.render('songs', {title: 'MusicPlaylist'});
    },
    playlist: (req, res) => {
        res.render('playlist', {title: 'MusicPlaylist'});
    },
    artist: (req, res) => {
        res.render('artist', {title: 'MusicPlaylist'});
    },
    albums: (req, res) => {
        res.render('albums', {title: 'MusicPlaylist'});
    }
};

module.exports = jamaica;