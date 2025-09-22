const express = require("express");
const mongo = require("mongoose");
const dotenvExpand = require("dotenv-expand");
const cors = require("cors");

dotenvExpand.expand(require("dotenv").config());

const app = express();

// cors access
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed by server"));
      }
    },
    credentials: true,
  })
);

// auth route
app.use("/api/v1/auth", require("./src/routes/auth.route"));

// MongoDB connector
mongo
  .connect(process.env.MONGOOO_CONNECTOR_URL, { retryWrites: true })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server has been started by ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log("Somethings went wrong with connect db.");
  });
