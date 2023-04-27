import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);
    setSum(n1 + n2);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Number 1:
          <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
        </label>
        <br />
        <label>
          Number 2:
          <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
      <br />
      <div>Sum: {sum}</div>
    </div>
  );
}

export default App;
