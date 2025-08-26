const AuthService = require('../services/auth.service');

class AuthController {
  static async register(req, res, next) {
    try {
      const { user, token } = await AuthService.register(req.body);

      res.status(201).json({
        success: true,
        data: {
          user,
          token
        }
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { user, token } = await AuthService.login(req.body);

      res.status(200).json({
        success: true,
        data: {
          user,
          token
        }
      });
    } catch (error) {
      next(error);
    }
  }

  static async getCurrentUser(req, res, next) {
    try {
      const user = await AuthService.getCurrentUser(req.user.id);

      res.status(200).json({
        success: true,
        data: { user }
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
