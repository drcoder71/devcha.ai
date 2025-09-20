const User = require("../models/user.model");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../helper/jwt.helper");

async function LoginOrRegisterService({
  provider,
  providerId,
  email,
  name,
  avatar,
}) {
  let user = await User.findOne({ providerId });

  if (!user) {
    user = await User.create({
      provider,
      providerId,
      email,
      name,
      avatar,
    });
  }

  // tokenlarni yaratamiz
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return { user, accessToken, refreshToken };
}

async function VerifyAccessToken() {}

module.exports = {
  LoginOrRegisterService,
  VerifyAccessToken,
};
