const jwt = require("jsonwebtoken");

function generateAccessToken(user) {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      provider: user.provider,
    },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: "15m" } // tez eskiradi
  );
}

function generateRefreshToken(user) {
  return jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "7d" } // uzoq yashaydi
  );
}

async function VerifyAccessToken(token) {
  return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  VerifyAccessToken,
};
