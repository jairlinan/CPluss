const express = require('express');
const morgan = require('morgan');
const exphbs = require("express-handlebars");
const path = require('path');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine(".hbs", exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars")
}));
app.set('view engine', 'hbs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Global Variables
app.use((req, res, next) => {

  next();
});

// routes
app.use(require('./routes/customers'));
app.use(require('./routes/authentication'));
app.use("/links", require('./routes/links'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// listening the Server
app.listen(app.get('port'), () => {
  console.log('Servidor escuchando en el puerto', app.get('port'));
});