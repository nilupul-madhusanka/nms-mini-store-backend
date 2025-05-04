const express = require('express');
const router = express.Router();
const {
  addToCart,
  getCart,
  updateCartItem,
  removeCartItem,
} = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect); // all routes protected

router.get('/', getCart);
router.post('/add', addToCart);
router.put('/update', updateCartItem);

// ✅ Changed route to match frontend DELETE /cart/:productId
router.delete('/:productId', removeCartItem);

module.exports = router;
