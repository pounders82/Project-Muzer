const mongoose = require('mongoose');
const Schema = mongoose.Schema; // could also use destructuring like const { Schema } = mongoose

// When using mongoose we have to tell what properties for the collection.  We can always add more at any time
const googleUserSchema = new Schema ({
    googleId: String,  // it will always be a string and to treat it this way.
    email: String
});


//This actual creates the users collection and assigns the userSchema
mongoose.model('users', googleUserSchema);
