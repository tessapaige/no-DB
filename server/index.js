const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers/controller')

let app = express();
app.use(bodyParser.json())

app.get('/api/playlist', controllers.getVideos)
app.post('/api/playlist', controllers.create)
app.delete('/api/playlist/:id', controllers.delete)

let port = 3005;
app.listen(port, () => console.log (`Listening on port ${port}`))

