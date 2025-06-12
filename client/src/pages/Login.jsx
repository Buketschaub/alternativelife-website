import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('/api/auth/login', { email, password });
    localStorage.setItem('token', res.data.token);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto">
      <h1 className="text-xl mb-2">Login</h1>
      <input className="border mb-2 w-full" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input className="border mb-2 w-full" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button className="bg-blue-500 text-white px-4 py-2" type="submit">Login</button>
    </form>
  );
}
