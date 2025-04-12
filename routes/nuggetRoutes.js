const express = require('express');
const router = express.Router();
const {
  getAllNuggets,
  getRandomNugget,
  createNugget,
  deleteNugget,
  countNugget
} = require('../controllers/nuggetController');

// ✅ Debug: Confirm routes are being loaded
console.log('✅ nuggetRoutes loaded');

// Define routes
router.get('/', getAllNuggets);         // GET /nuggets
router.get('/random', getRandomNugget); // GET /nuggets/random
router.get('/count', countNugget);      // GET /nuggets/count
router.post('/', createNugget);         // POST /nuggets
router.delete('/:id', deleteNugget);    // DELETE /nuggets/:id

module.exports = router;
