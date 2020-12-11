const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/userModel')
require('dotenv').config({ path: '.env' });

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  })
});

passport.use(
  new GoogleStrategy({
    //options for the google strategy
    callbackURL:'/auth/google/callback',
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  }, async (accessToken, refreshToken, profile, done) => {
    const currUser = await User.findOne({googleId: profile.id});
    if (currUser) {
      //already have user
      done(null, currUser);
    } else {
        const newUser = await (new User({
          username: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value
        })).save();
        done(null, newUser);
      }
  })
)