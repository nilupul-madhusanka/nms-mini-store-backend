const Cart = require('../models/Cart');

exports.checkout = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ msg: 'Cart is empty' });
    }

    const totalAmount = cart.items.reduce((acc, item) => {
      return acc + item.quantity * item.product.price;
    }, 0);

    // (In real-world, process payment here)

    // Clear the cart
    cart.items = [];
    await cart.save();

    res.json({
      msg: 'Place order successful',
      total: totalAmount,
    });
  } catch (err) {
    res.status(500).json({ msg: 'Checkout failed' });
  }
};
