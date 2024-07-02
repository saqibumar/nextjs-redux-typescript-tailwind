'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Nav = () => {
  const loginCount = useSelector((state: RootState) => state.user.loginCount);
  const user = useSelector((state: RootState) => state.user);

  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        { !user.username && (<li>
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </li>)}
        <li>
          <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </li>
        { user.username && (<li>
        <Link href="/user-management" className="text-blue-500 hover:underline">
            User Management
          </Link>
        </li>)}
        <li className="ml-auto">
          Login Count: {loginCount}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
