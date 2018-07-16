const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');

const configDB = require('./config/db');
const usersRouter = require('./routes/users');
const itemsRouter = require('./routes/items');
const middlewares = require('./middlewares/middlewares');

// const LocalStrategy = require('passport-local');
// const expressSession = require('express-session');

const User = require('./models/user');

const DB_URL = process.env.DB_URL || configDB.databaseURL ;
mongoose.connect(configDB.databaseURL, { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
    console.log('Connected to db at ' + configDB.databaseURL);
});
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

const app = express();
app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//app.use(express.static('public'));
// app.use(expressSession({
//     secret: 'pizza is awesome!',
//     resave: false,
//     saveUninitialized: false
// }));
app.use(passport.initialize());
app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

//require('./config/passport')(passport);

//app.all('*', middlewares.isLoggedIn);
app.use('/users', usersRouter);
app.use('/items', itemsRouter); /**TODO CHANGE TO username/items */


app.get('/', (req, res) => {
    res.send('root route');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('SERVER RUNNING ON PORT ' + PORT);
});
