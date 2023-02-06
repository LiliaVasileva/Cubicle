const express = require('express');

const routes = require('./routes');
const config = require('./config');
const setupViewEngine = require('./config/viewEngine');
const initDatabase = require('./config/db');

const app = express();
setupViewEngine(app);

app.use(express.static('src/public'));
// urlencoded middleware out of the box from express, needs oo be added for sure,
//  go through all requst to read for data needs to be parsed

app.use(express.urlencoded({ extended: false }));
app.use(routes);

initDatabase()
    .then(() => app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`)))
    .catch((err) => console.error(err));
