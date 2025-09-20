const { VerifyAccessToken } = require("../helper/jwt.helper");

async function AuthMiddleware(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Invalid token format" });
    }

    const decoded = await VerifyAccessToken(token);
    req.user = decoded; // decoded ma’lumotni requestga qo‘shamiz
    next();
  } catch (err) {
    return res.status(403).json({ message: "Token is invalid or expired" });
  }
}

module.exports = AuthMiddleware;
