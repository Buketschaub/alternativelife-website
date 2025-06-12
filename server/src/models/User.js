import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  displayName: String,
  lat: Number,
  lon: Number
}, { _id: false });

const birthDataSchema = new mongoose.Schema({
  date: String,
  time: String,
  location: locationSchema
}, { _id: false });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  birthData: birthDataSchema
});

export default mongoose.model('User', userSchema);
