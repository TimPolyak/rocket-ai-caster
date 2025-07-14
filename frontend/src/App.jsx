import React, { useState } from 'react';

export default function App() {
  const [file, setFile] = useState();
  const [player, setPlayer] = useState("");
  const [tone, setTone] = useState("Energetic");
  const [msg, setMsg] = useState("");

  const handleSubmit = async () => {
    if (!file) return;
    const data = new FormData();
    data.append("file", file);
    data.append("player", player);
    data.append("tone", tone);

    const res = await fetch("http://localhost:8000/analyze", {
      method: "POST",
      body: data,
    });
    const json = await res.json();
    setMsg(JSON.stringify(json));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Rocket AI Caster</h1>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <input placeholder="Player name" value={player} onChange={e => setPlayer(e.target.value)} />
      <select value={tone} onChange={e => setTone(e.target.value)}>
        <option>Energetic</option>
        <option>Confident</option>
        <option>Calm</option>
      </select>
      <button onClick={handleSubmit}>Upload & Analyze</button>
      <pre>{msg}</pre>
    </div>
  );
}
