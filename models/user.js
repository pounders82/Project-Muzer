const mongoose = require('mongoose');
const Schema = mongoose.Schema; // could als use destructuring like const { Schema } = mongoose

// have to tell what properties for the collection.  We can always add more at any time
const userSchema = new Schema ({
    googleId: String  // it will always be a string and to treat it this way.
});

//This actual creates the users collection and assigns the userSchema
mongoose.model('users', userSchema);