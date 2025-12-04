import React, { useEffect, useState } from "react";
import { API_URL } from "./api";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch(`${API_URL}/`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend not reachable"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>My Dockerized React App - !</h1>  
    <h2>Backend says:</h2>
      <p style={{ fontSize: "22px", color: "green" }}>{message}</p>
    </div>
  );
}

export default App;
