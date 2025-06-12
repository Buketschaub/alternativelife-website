import express from 'express';
import auth from '../middleware/auth.js';
import HoroscopeReport from '../models/HoroscopeReport.js';

const router = express.Router();

router.get('/', auth, async (req, res) => {
  const reports = await HoroscopeReport.find({ userId: req.user._id }).sort({ createdAt: -1 });
  res.json(reports);
});

export default router;
