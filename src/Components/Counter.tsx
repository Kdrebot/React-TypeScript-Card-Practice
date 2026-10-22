import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount((previous) => previous - 1)}>
        Decrease
      </button>
      <br />
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
