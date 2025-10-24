import { useGame } from "./components/GameContext";
import Field from "./components/Field";
import Scoreboard from "./components/Scoreboard";
import Welcome from "./components/Welcome";

export default function App() {
  const { playing } = useGame();
  return (
    <>
      <h1>Whack-a-Mole</h1>
      {playing ? (
        <>
          <Scoreboard />
          <Field />
        </>
      ) : (
        <Welcome />
      )}
    </>
  );
}
