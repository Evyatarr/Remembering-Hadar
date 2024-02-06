import { useState } from "react";
import "./App.css";
import hadarPic from "./assets/hadar001.jpg";

function App() {
  const [heart, setHeart] = useState("❤️");

  return (
    <>
      <img src={hadarPic} className="logo" alt="Hadar"></img>
      <h1>לזכרו של הדר קפלוק ז״ל</h1>
      <p>..האתר בהקמה </p>
      <div className="card">
        <button onClick={() => setHeart((heart) => heart + "❤️")}>
          {heart}
        </button>
      </div>
    </>
  );
}

export default App;
