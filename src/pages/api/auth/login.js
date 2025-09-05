// pages/api/auth/login.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    if (username === "admin" && password === "secret") {
      // Mock user data and token (this would usually come from a database)
      const user = { id: 1, firstName: "Admin", email: "admin@example.com" };
      const token = "your_generated_token_here"; // Generate or retrieve a real token

      return res.status(200).json({ user, token });
    } else {
      return res.status(401).json({ message: "Invalid username or password" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
