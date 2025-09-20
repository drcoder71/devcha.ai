const app = require("express")();
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");

require("dotenv").config();

app.use(
  session({
    secret: process.env.SESSION_SECRET || "devcha_secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1/auth", require("./src/routes/auth.route"));

mongoose
  .connect(
    `mongodb+srv://drcoderjs:${process.env.MANGODB_PROJECT_PASSWORD}@cluster0.uehp1io.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server has been started by ${process.env.PORT} port`);
    });
  })
  .catch((err) => {
    console.log("DB cann't connect. Somethings went wrong!", err);
  });
