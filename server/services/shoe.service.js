const prisma = require('../db/prisma');
const { NotFoundError, AuthorizationError } = require('../utils/errors');

class ShoeService {
  static async getAllShoes(userId) {
    return await prisma.shoe.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        brand: true,
        createdAt: true,
        updatedAt: true
      }
    });
  }

  static async getShoeById(shoeId, userId) {
    const shoe = await prisma.shoe.findUnique({
      where: { id: shoeId },
      select: {
        id: true,
        name: true,
        brand: true,
        userId: true,
        createdAt: true,
        updatedAt: true
      }
    });

    if (!shoe) {
      throw new NotFoundError('Shoe not found');
    }

    if (shoe.userId !== userId) {
      throw new AuthorizationError('Not authorized to access this shoe');
    }

    return shoe;
  }

  static async createShoe(shoeData, userId) {
    return await prisma.shoe.create({
      data: {
        name: shoeData.name,
        brand: shoeData.brand,
        userId
      },
      select: {
        id: true,
        name: true,
        brand: true,
        createdAt: true,
        updatedAt: true
      }
    });
  }

  static async updateShoe(shoeId, updateData, userId) {
    // First check if shoe exists and belongs to user
    await this.getShoeById(shoeId, userId);

    return await prisma.shoe.update({
      where: { id: shoeId },
      data: {
        name: updateData.name,
        brand: updateData.brand
      },
      select: {
        id: true,
        name: true,
        brand: true,
        createdAt: true,
        updatedAt: true
      }
    });
  }

  static async deleteShoe(shoeId, userId) {
    // First check if shoe exists and belongs to user
    await this.getShoeById(shoeId, userId);

    await prisma.shoe.delete({
      where: { id: shoeId }
    });

    return { message: 'Shoe deleted successfully' };
  }
}

module.exports = ShoeService;
