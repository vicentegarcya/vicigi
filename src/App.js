import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);

  return (
    <div className="App">
      <header className="App-header">🪐⚡️</header>
      <body className="App-body">
        <div className="main-content">
          <div className="intro">
            <p>
              En una época de hacer balance, me apetecía echar la vista atrás para
              revivir lo que somos y lo que hemos contruído.
            </p>
          </div>
        </div>
        <div className="controllers">
          {step !== 0 ? (
            <button className="previous-btn" onClick={() => setStep(step - 1)}>
            ➔
            </button>
          ) : undefined}
          <h2>Bienvenida</h2>
          <button className="next-btn" onClick={() => setStep(step + 1)}>
            ➔
          </button>
        </div>
      </body>
    </div>
  );
}

export default App;
