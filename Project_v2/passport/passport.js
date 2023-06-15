const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv/config');
passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
      done(null, user);
  });

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback"
    // callbackURL: "http://localhost:80/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
  
    // Salva o access token e o refresh token no perfil do usuário
    profile.accessToken = accessToken;
    profile.refreshToken = refreshToken;

    return done(null, profile);
  }
));
