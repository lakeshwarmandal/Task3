import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div className="cont">
      <header>
        <h1>HTML Semantics</h1>
      </header>
      <main>
        <ul>
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
        </ul>
      </main>

      <button onClick={handleIncrement}>Increment Count</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
