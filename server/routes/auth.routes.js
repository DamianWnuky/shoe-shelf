const express = require('express');
const AuthController = require('../controllers/auth.controller');
const { validateRegistration, validateLogin } = require('../utils/validation');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/register', validateRegistration, AuthController.register);
router.post('/login', validateLogin, AuthController.login);

// Protected routes
router.get('/me', authenticateToken, AuthController.getCurrentUser);

module.exports = router;
