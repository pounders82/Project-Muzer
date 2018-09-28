const passport = require('passport');

module.exports = (app) => {

//when a user is coming in on the route auth/google then attempt to authenticate using google
    app.get('/auth/google', passport.authenticate('google', {  //passport knows the string google even though we never set it up
        scope: ['profile', 'email'] // what access do we want.  We could ask for more this is all we want.
    }));

    app.get('/auth/google/callback', passport.authenticate('google'));//This is the route back from google and attempts to create an account

    app.get('/api/logout', (req,res) =>{
        req.logOut();//This tells Passport to kill the cookies and logout the user.
        res.send(req.user);
    });

    app.get('/api/current_user', (req,res) =>{
        res.send(req.user);
        }
    );
};

