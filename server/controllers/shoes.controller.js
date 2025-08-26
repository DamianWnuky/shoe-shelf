const ShoeService = require('../services/shoe.service');

class ShoesController {
  static async getAllShoes(req, res, next) {
    try {
      const shoes = await ShoeService.getAllShoes(req.user.id);

      res.status(200).json({
        success: true,
        count: shoes.length,
        data: shoes
      });
    } catch (error) {
      next(error);
    }
  }

  static async getShoeById(req, res, next) {
    try {
      const shoe = await ShoeService.getShoeById(req.params.id, req.user.id);

      res.status(200).json({
        success: true,
        data: shoe
      });
    } catch (error) {
      next(error);
    }
  }

  static async createShoe(req, res, next) {
    try {
      const shoe = await ShoeService.createShoe(req.body, req.user.id);

      res.status(201).json({
        success: true,
        data: shoe
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateShoe(req, res, next) {
    try {
      const shoe = await ShoeService.updateShoe(req.params.id, req.body, req.user.id);

      res.status(200).json({
        success: true,
        data: shoe
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteShoe(req, res, next) {
    try {
      const result = await ShoeService.deleteShoe(req.params.id, req.user.id);

      res.status(200).json({
        success: true,
        data: result
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ShoesController;
