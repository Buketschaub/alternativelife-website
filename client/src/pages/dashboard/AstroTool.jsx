import React, { useState } from 'react';
import axios from 'axios';

export default function AstroTool() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const res = await axios.post('/api/astro/calculate', {
      type: 'natal',
      person1Data: { name, date, time, place }
    }, { headers: { Authorization: `Bearer ${token}` } });
    setResult(res.data);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-2">Astro Tool</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input className="border w-full" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <input className="border w-full" value={date} onChange={e => setDate(e.target.value)} placeholder="Date" />
        <input className="border w-full" value={time} onChange={e => setTime(e.target.value)} placeholder="Time" />
        <input className="border w-full" value={place} onChange={e => setPlace(e.target.value)} placeholder="Place" />
        <button className="bg-blue-500 text-white px-4 py-2" type="submit">Calculate</button>
      </form>
      {result && <pre className="mt-4 bg-gray-100 p-2">{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}
