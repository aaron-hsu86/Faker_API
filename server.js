const express = require('express')
const {faker} = require('@faker-js/faker')
const app = express()
const port = 8000;

// allow app to accept json
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const routeAttacher = require('./routes/routes')
routeAttacher(app)


app.listen( port, () => console.log(`SERVER ONLINE!!\nListening on port: ${port}`) );