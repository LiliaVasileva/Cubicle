const express = require('express');

const app = express();
const config = require('./config');

const setupViewEngine  = require('./config/viewEngine');
setupViewEngine(app);

app.use(express.static('src/public'));

// require('./config/viewEngine')(app);


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(config.PORT, ()=> console.log(`Server is running on port ${config.PORT}...`));