import express from 'express';
import auth from '../middleware/auth.js';
import HoroscopeReport from '../models/HoroscopeReport.js';

const router = express.Router();

router.post('/calculate', auth, async (req, res) => {
  try {
    // In real implementation, call Bloom API with birth data here
    const { type, person1Data, person2Data } = req.body;
    const dummyReport = { message: 'Bloom API response placeholder' };

    const report = await HoroscopeReport.create({
      userId: req.user._id,
      type,
      person1Data,
      person2Data,
      reportContent: dummyReport
    });

    res.json(report);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
