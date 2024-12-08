const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");

exports.registerAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const newAdmin = await Admin.create({ username, password });
    res
      .status(201)
      .json({ message: "Admin registered successfully", admin: newAdmin });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Not authorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = await Admin.findById(decoded.id);
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is invalid" });
  }
};
