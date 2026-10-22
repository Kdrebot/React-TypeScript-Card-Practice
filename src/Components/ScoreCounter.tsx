import { useState } from "react";

export default function ScoreCounter() {
  const [score, setScore] = useState<number>(0);

  return (
    <div>
      <button onClick={() => setScore(score + 1)}>+</button>
      <p>Score: {score}</p>
      <button onClick={() => setScore(score - 1)}>-</button>
      <br />
      <button onClick={() => setScore(0)}>Clear Score</button>
    </div>
  );
}
