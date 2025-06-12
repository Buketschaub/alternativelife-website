import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('/api/reports', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setReports(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl mb-2">Reports</h1>
      <ul>
        {reports.map(r => (
          <li key={r._id} className="border-b py-2">
            {r.type} - {new Date(r.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
