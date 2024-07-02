'use client';

import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';
import { useState } from 'react';

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if ((username === 'saqib' && password === 'saqib') || (username === 'test' && password === 'test')) {
      dispatch(setUser({ username, email: 'saqib@example.com' }));
      router.push('/user-management');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="p-6 bg-white rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="mb-4 text-2xl font-bold">Login</h2>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
