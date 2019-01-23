var express = require('express')
var app = express()
var path = require('path')
var fs = require('fs')

app.get('/', function(req, res) {
    const tracks = fs.readdirSync(path.join(__dirname, 'tracks')).map(file => {
        if(file.indexOf('.mp3') === -1) {
            return
        }
        return `
    <div class="track">
        <div>
            <h3>${file}</h3>
        </div>
        <div>
            <audio controls style="width: 100%" preload="metadata">
                <source src="/track/${file}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        </div>
    </div>`
    })
    res.send(`
        <html>
            <head>
                <title>Music Player</title>
                <link rel="stylesheet" href="/index.css" />
            </head>
            <body style="text-align:center;">
                <h1 class="title">Music Player</h1>
                <h2 class="subtitle">Put MP3 files on the tracks directory to see them here</h2>
                ${tracks.join('')}
                <script src="/index.js" />
            </body>
        </html>
    `)
})

app.get('/track/:track', function(req, res) {
    res.sendFile(path.join(__dirname, 'tracks', req.params.track))
})

app.use(express.static(__dirname + '/public'));

app.listen(9090)