const express = require('express');  //this statement is like import.  We are importing express to be able to use it.
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user'); //need to have the user first or will create and error
require('./services/passport');
//const players = require('./players.html');

mongoose.connect(keys.mongoURI);
const app = express();  //app is used to route requests


//This create a cookie on the user computer which remembers that they are logged in.  I have set for 30 days.
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 100, //This is a required argument for cookie session.  how long we want cookie to last
        //in browser.  Is in milliseconds so we have to calculate how long 30 days is.
    keys: [keys.cookieKey]  //This is used encrypt the cookie
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
//app.use('/players', players);
const PORT = process.env.PORT || 5000;//this is for Heroku.  Looks for which port to listen to from Heroku or port 5000
app.listen(PORT);

