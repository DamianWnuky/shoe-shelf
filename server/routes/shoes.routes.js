const express = require('express');
const ShoesController = require('../controllers/shoes.controller');
const { validateShoe } = require('../utils/validation');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// All routes require authentication
router.use(authenticateToken);

// GET /shoes - Get all shoes for the authenticated user
router.get('/', ShoesController.getAllShoes);

// GET /shoes/:id - Get a specific shoe
router.get('/:id', ShoesController.getShoeById);

// POST /shoes - Create a new shoe
router.post('/', validateShoe, ShoesController.createShoe);

// PUT /shoes/:id - Update a shoe
router.put('/:id', validateShoe, ShoesController.updateShoe);

// DELETE /shoes/:id - Delete a shoe
router.delete('/:id', ShoesController.deleteShoe);

module.exports = router;
