import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue-600">Logicloud UI!</span>
        </h1>
        <p className="mt-3 text-2xl">
          Get started by navigating to:
        </p>
        <div className="mt-6 text-xl">
          <ul className="space-y-4">
            <li>
              <Link href="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </li>
            <li>
              <Link href="/user-management" className="text-blue-500 hover:underline">
                User Management
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
