const authService = require("../service/auth.service");

class AuthController {
  async loginController(req, res, next) {
    try {
      const { email, name, provider, providerId, avatar } = req.validatedData;

      const user = await authService.loginService({
        email,
        name,
        provider,
        providerId,
        avatar, 
      });

      res.status(200).json({
        message: "Login successful",
        user,
      });
    } catch {
      console.log("Error user can not created");
    }
  }
}

module.exports = new AuthController();
