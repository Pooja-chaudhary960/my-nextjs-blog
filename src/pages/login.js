import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { loginRequest, loginSuccess, loginFailure } from "../store/slices/authSlice";
import { useRouter } from "next/router";
import Button from "../components/Button/Button";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const { isAuthenticated, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginRequest({ username, password }));

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Dispatch login success action with user data and token
        dispatch(loginSuccess({ token: data.token, user: data.user }));
        router.push("/dashboard");  // Redirect to dashboard
      } else {
        dispatch(loginFailure(data.message));  // Handle errors (e.g., wrong credentials)
      }
    } catch (error) {
      dispatch(loginFailure("An error occurred while logging in."));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");  // Redirect if logged in
    }
  }, [isAuthenticated, router]);

  return (
    <div>
      <main className="p-8 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button type="submit">Login</Button>
        </form>
      </main>
    </div>
  );
}
