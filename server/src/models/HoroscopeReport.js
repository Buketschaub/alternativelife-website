import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['natal', 'synastry'], required: true },
  person1Data: {
    name: String,
    date: String,
    time: String,
    place: String
  },
  person2Data: {
    name: String,
    date: String,
    time: String,
    place: String
  },
  reportContent: { type: Object },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('HoroscopeReport', reportSchema);
