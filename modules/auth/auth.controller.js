const AuthService = require("./auth.service");

async function register(req, res) {
  try {
    const result = await AuthService.registerUser(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function login(req, res) {
  try {
    const user = await AuthService.loginUser(req.body.email, req.body.password);
    if (!user) return res.status(401).json({ success: false, message: "Invalid credentials" });
    res.json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

module.exports = { register, login };