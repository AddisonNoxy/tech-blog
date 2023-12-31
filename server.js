const path = require('path');
const express = require('express');
const routes = require('./routes');
//const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create();



const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

//app.use(routes);

app.listen(PORT, () => {
    console.log("Server listening!");
})