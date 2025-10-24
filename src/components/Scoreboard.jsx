import { useGame } from "./GameContext";

export default function Scoreboard() {
  const { score, time, stop } = useGame();

  return (
    <div className="scoreboard">
      <p>Score: {score}</p>
      <p>Time Left: {time}s</p>
      <button onClick={stop}>Stop Game</button>
    </div>
  );
}
