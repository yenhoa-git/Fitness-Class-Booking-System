const express = require('express');
const {
  getClasses,
  getClassById,
  createClass,
  updateClass,
  cancelClass,
  bookClass,
  cancelBooking,
} = require('../controllers/classController');
const { protect, adminOnly, memberOnly } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, getClasses);
router.post('/', protect, adminOnly, createClass);
router.get('/:id', protect, getClassById);
router.put('/:id', protect, adminOnly, updateClass);
router.delete('/:id', protect, adminOnly, cancelClass);
router.post('/:id/book', protect, memberOnly, bookClass);
router.delete('/:id/book', protect, memberOnly, cancelBooking);

module.exports = router;
