import express from 'express';
import auth from '../middleware/auth.js';
import bcrypt from "bcryptjs";

const router = express.Router();

router.get('/me', auth, (req, res) => {
  res.json(req.user);
});

router.put('/profile', auth, async (req, res) => {
  try {
    const { name, email, password, birthData } = req.body;
    if (name) req.user.name = name;
    if (email) req.user.email = email;
    if (password) req.user.password = await bcrypt.hash(password, 10);
    if (birthData) req.user.birthData = birthData;
    await req.user.save();
    res.json(req.user);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
