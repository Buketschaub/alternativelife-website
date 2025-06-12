import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile() {
  const [form, setForm] = useState({ name: '', email: '', birthData: { date: '', time: '', location: { displayName: '', lat: '', lon: '' } } });

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('/api/user/me', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setForm(res.data));
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const { name, email, birthData } = form;
    await axios.put('/api/user/profile', { name, email, birthData }, { headers: { Authorization: `Bearer ${token}` } });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-2">Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input className="border w-full" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Name" />
        <input className="border w-full" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" />
        <input className="border w-full" value={form.birthData.date} onChange={e => setForm({ ...form, birthData: { ...form.birthData, date: e.target.value } })} placeholder="Birth Date" />
        <input className="border w-full" value={form.birthData.time} onChange={e => setForm({ ...form, birthData: { ...form.birthData, time: e.target.value } })} placeholder="Birth Time" />
        <input className="border w-full" value={form.birthData.location.displayName} onChange={e => setForm({ ...form, birthData: { ...form.birthData, location: { ...form.birthData.location, displayName: e.target.value } } })} placeholder="Birth Place" />
        <button className="bg-blue-500 text-white px-4 py-2" type="submit">Save</button>
      </form>
    </div>
  );
}
