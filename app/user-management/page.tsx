'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { clearUser } from '../../store/userSlice';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
// import { useEffect, useState } from 'react';

const UserManagement = () => {
  const router = useRouter(); // Initialize useRouter
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold">User Management</h2>
      <div className="p-4 bg-gray-100 rounded">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      {user.username && (<button
        onClick={() => dispatch(clearUser())}
        className="p-2 mt-4 text-white bg-red-500 rounded"
      >
        Logout
      </button>)}
      {!user.username && (<button
        onClick={handleLogin}
        className="p-2 mt-4 text-white bg-red-500 rounded"
      >
        Login
      </button>)}
      <p className="mt-4">Login Count: {user.loginCount}</p>
    </div>
  );
};

export default UserManagement;
