import React, { useMemo, useState } from 'react'

const computeHaveyTask = (num, type) => {
    console.log("Computing Heavy Task", type);
    let total = 0;
    for (let i = 0; i < 1e7; i++){
        total += num * Math.random();
    }
    return Math.round(total)
}
// component without useMemo
function WithoutMemo ({ input }) {
    const result = computeHaveyTask(input, 'Without useMemo');
    return <p><strong>Without useMemo:</strong>{ result}</p>
}
// component with usememo
function WithMemo ({ input }) {
    const result = useMemo(() => computeHaveyTask(input, "With useMemo"), [input])
    return <p><strong>With useMemo: </strong>{result }</p>
}
const User = () => {
    const [input, setInput] = useState(5)
    const [count, setCount] = useState(0);

  return (
      <div>
          <h2>Use Memo Performance Demo</h2>
          <label htmlFor="">
              Input
              <input
                  type="number"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  style={{ marginLeft: "10px" }}
              />
          </label>

          <div style={{ marginTop: "20px" }}>
              <WithoutMemo input={input} />
              <WithMemo input={input} />
          </div>
          <button
              onClick={() => setCount((prev) => prev + 1)}
              style={{ marginTop: "20px" }}>
              Re-render App (count = {count})
          </button>
      </div>
  );
}

export default User
