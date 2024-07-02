export default function Register() {
    return (
      <div className="flex items-center justify-center h-screen">
        <form className="p-6 bg-white rounded shadow-md">
          <h2 className="mb-4 text-2xl font-bold">Register</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
          />
          <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded">
            Register
          </button>
        </form>
      </div>
    );
  }
  