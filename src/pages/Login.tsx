export default function Login() {
  return (
    <main className="w-screen min-h-screen flex align-middle justify-center">
      <div className="border flex flex-col gap-4 h-min my-auto p-4 shadow">
        <div>
          <h1 className="text-center text-xl">Login</h1>
          <h2 className="text-xs text-center text-gray-600">Notes of Arkad</h2>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <label>Username</label>
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="border p-2"
          />
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <label>Passphrase</label>
          <input
            name="passphrase"
            type="password"
            placeholder="********"
            className="border p-2"
          />
        </div>
      </div>
    </main>
  );
}
