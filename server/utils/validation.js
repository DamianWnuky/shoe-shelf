const { body, validationResult } = require('express-validator');
const { ValidationError } = require('./errors');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(err => err.msg);
    throw new ValidationError(errorMessages.join(', '));
  }
  next();
};

const validateRegistration = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  body('name')
    .trim()
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters long'),
  handleValidationErrors,
];

const validateLogin = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
  handleValidationErrors,
];

const validateShoe = [
  body('name')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Shoe name must be between 1 and 100 characters'),
  body('brand')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Brand must be between 1 and 50 characters'),
  handleValidationErrors,
];

module.exports = {
  validateRegistration,
  validateLogin,
  validateShoe,
  handleValidationErrors,
};
