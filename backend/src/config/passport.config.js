const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
const { LoginOrRegisterService } = require("../services/auth.service");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/v1/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await LoginOrRegisterService({
          provider: "google",
          providerId: profile.id,
          email: profile.emails[0].value,
          name: profile.displayName,
          avatar: profile.photos?.[0]?.value || null,
        });
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/api/v1/auth/github/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await LoginOrRegisterService({
          provider: "github",
          providerId: profile.id,
          email: profile.emails?.[0]?.value || null,
          name: profile.displayName,
          avatar: profile.photos?.[0]?.value || null,
        });
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);
