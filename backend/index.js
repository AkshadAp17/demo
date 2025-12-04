const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS so frontend can call backend
app.use(cors());

// Simple API endpoint
app.get("/", (req, res) => {
  res.json({ message: "Hello from Backend! Akshad11/17 king of Samosa" });
});


// Another example API
app.get("/status", (req, res) => {
  res.json({ status: "Backend is running", timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
