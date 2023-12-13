import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);

  return (
    <div className="App">
      <header className="App-header">🪐⚡️</header>
      <body className="App-body">
        <div className="main-content">
          {step === 0 && (
            <div className="intro">
              <div></div>
              <p>
                En una época de hacer balance, me apetecía echar la vista atrás
                para reconocer lo que somos y lo que hemos construído.
              </p>
            </div>
          )}
          {step === 1 && (
            <div className="primer-beso">
              <p>
                Te lo he dicho muchas veces, pero esta ha sido la mejor noche de mi vida.
              </p>
              <div></div>
            </div>
          )}
        </div>
        <div className="controllers">
          {step !== 0 ? (
            <button className="previous-btn" onClick={() => setStep(step - 1)}>
              {"﹤"}
            </button>
          ) : undefined}
          {step === 0 && (
            <h2>Empecemos</h2>
          )}
          {step === 1 && (
            <h2>Primer Beso</h2>
          )}
          <button className="next-btn" onClick={() => setStep(step + 1)}>
            ﹥
          </button>
        </div>
      </body>
    </div>
  );
}

export default App;
