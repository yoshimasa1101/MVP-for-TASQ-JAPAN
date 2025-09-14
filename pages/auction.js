import { useState } from "react";

export default function Auction() {
  const [bids, setBids] = useState([]);
  const [input, setInput] = useState("");

  const placeBid = () => {
    if (!input) return;
    setBids([...bids, Number(input)]);
    setInput("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>オークション</h1>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="入札額"
      />
      <button onClick={placeBid}>入札</button>
      <ul>
        {bids.map((bid, i) => (
          <li key={i}>{bid} 円</li>
        ))}
      </ul>
    </div>
  );
}
