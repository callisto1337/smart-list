const path = require('path');
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
const config = require('./config');


app.use(express.static('../public'));
passport.use(new GoogleStrategy({
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: config.callbackURL
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/auth', passport.authenticate('google', { scope: ['profile'] }));

app.listen(8080);
console.log('Server running at http://localhost:8080/');