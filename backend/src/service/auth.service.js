const userSchema = require("../schema/user.schema");

class AuthService {
  async loginService({ ...enteryUserData }) {
    const existUser = await userSchema.findOne({
      email: enteryUserData?.email,
    });

    if (!existUser) {
      existUser = await userSchema.create({
        email: enteryUserData.email,
        name: enteryUserData.name,
        provider: enteryUserData.provider,
        providerId: enteryUserData.providerId,
        avatar: enteryUserData.avatar,
      });
    }

    return user;
  }
}

module.exports = new AuthService();
