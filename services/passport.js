const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');//one argument trying to fetch.  Two means we are trying to load something.

//This will create a identifying piece of information that passport will use to set-cookie to identify user
//In this case we want to use the user id that mongoDb assigns in case we decide to add another authorization strategy
passport.serializeUser((user, done) => {
   done(null, user.id);  //first argument. do we expect any errors. in this case no.  The user.id is the id assigned by mongoDb

});

passport.deserializeUser((id,done) =>{
    User.findById(id)
        .then(user => {
            done(null,user);
        });
});

//Tells passport to use Google strategy.
//Need to sign up application with Google at console.developers.google.com. can make a garbage email if needed
//Enable Google+ API.  This has the oauth.  if search for oauth it will not be there.
//OAuth client ID Credential
//Enter project name to show to clients
//Enter type of application
//Authorized stuff 1. http://localhost:5000 2.http://localhost:5000/auth/google/callback
//Client ID  - This is a public token
//clientsecret    - do not want to share with anybody.  This info is in the keys.js
passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',  // this is where Google is going to send the user after auth
    },
    (accessToken, refreshToken, profile,done) =>{
    //This checks to see if the user exists.  If not the create user
    User.findOne({ googleId: profile.id }).then(existingUser => {
        if(existingUser){
        //We already have the user
            done(null, existingUser);
        }
        else{
            //creates a model instance with the google profile id and then saves.
            new User({ googleId: profile.id })
                .save()
                .then(user => done(null,user));

        }
        })

    }));