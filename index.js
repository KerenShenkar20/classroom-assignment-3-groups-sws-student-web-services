const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.json({response: "index route"}));

app.get('/playlist', (req,res) => res.json({playlistName:"Pop songs",songs:["Uptown Funk","Dance monkey","Sorry","Paradise","Suger"]})); //Sivan
/*  Every team member has to add a route to this file, like the one above
    For example: 
    Student A writes the route for GET /playlist
    and student B writes the route for PUT /language */

app.listen(port, () => console.log(`Listening on port ${port}`));
