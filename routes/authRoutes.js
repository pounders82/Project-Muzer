const passport = require('passport');

module.exports = (app) => {

//when a user is coming in on the route auth/google then attempt to authenticate using google
    app.get('/auth/google', passport.authenticate('google', {  //passport knows the string google even though we never set it up
        scope: ['profile', 'email'] // what access do we want.  We could ask for more this is all we want.
    }));

    app.get('/auth/google/callback',
        passport.authenticate('google'),
        (req, res) =>{
         res.redirect('/player')  //after user is authed then send to dashboard.  i will need to change to the page alex has set up.
        }
    );//This is the route back from google and attempts to create an account

    app.get('/auth/gitlab', passport.authenticate('gitlab',{
        scope: ['user:email']
        }
        ));

    app.get('/auth/gitlab/callback', passport.authenticate('gitlab'));

    app.get('/api/logout', (req,res) =>{
        req.logOut();//This tells Passport to kill the cookies and logout the user.
        res.redirect('/')
    });

    app.get('/api/current_user', (req,res) =>{ //We will use this later to tell if the user is logged in.
        res.send(req.user);
        }
    );
};

