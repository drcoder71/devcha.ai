const express = require("express");
const authController = require("../controllers/auth.controller");
const validateMiddleware = require("../middlewares/validation.middleware");
const authSchema = require("../validations/user.validation");

const route = express.Router();

route.post(
  "login",
  validateMiddleware(authSchema),
  authController.loginController
);

module.exports = route;
