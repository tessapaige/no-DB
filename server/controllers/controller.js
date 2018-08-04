let playlist = [];
let id = [0];

module.exports = {

create: (req, res) => {
    playlist.push(req.body.newPlaylist)
    res.status(200).send(playlist)
},

delete: (req, res) => {
    let index = playlist.findIndex(newPlaylist => newPlaylist.id == id)
    playlist.splice(index, 1)
    res.status(200).send(playlist)
},

getVideos: (req, res) => {
    res.status(200).send(playlist)
}


}