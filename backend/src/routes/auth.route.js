const express = require("express");
const passport = require("passport");

const router = express.Router();

// Google login boshlash
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.json({
      message: "Login successful ✅",
      user: req.user,
    });
  }
);

module.exports = router;
