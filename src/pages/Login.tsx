import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthState } from "../lib/redux/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (username == "admin" && password == "admin123") {
      dispatch(setAuthState({ isLoggedIn: true, user: username }));

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(username));
			
      navigate("/");
    } else {
      alert("Failed to authenticate");
    }
  };

  return (
    <main className="w-screen min-h-screen flex align-middle justify-center">
      <form className="my-auto" onSubmit={handleLogin}>
        <div className="border flex flex-col gap-4 h-min p-4 shadow">
          <div>
            <h1 className="text-center text-xl">Login</h1>
            <h2 className="text-xs text-center text-gray-600">
              Notes of Arkad
            </h2>
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <label>Username</label>
            <input
              name="username"
              type="text"
              placeholder="Username"
              className="border p-2"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <label>Passphrase</label>
            <input
              name="passphrase"
              type="password"
              placeholder="********"
              className="border p-2"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white text-sm bg-slate-900 hover:bg-slate-700 py-1 mt-4 "
          >
            Login
          </button>
        </div>
      </form>
    </main>
  );
}
