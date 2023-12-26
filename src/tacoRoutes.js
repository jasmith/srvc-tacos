const express = require('express');
const router = express.Router();
const tacoController = require('./tacoController');

// Route to get all tacos


// Add a new taco
router.post('/', tacoController.addTaco);
router.get('/stub',tacoController.stubCall);

router.get('/tacos', tacoController.getAllTacos);
// Get a taco by ID
router.get('/:id', tacoController.getTacoById);

module.exports = router;
