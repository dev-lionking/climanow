import Clima from "./components/clima/Clima";
import Clima_dia from "./components/clima/Clima_dia";
import Clima_week from "./components/clima/Clima_week";
import Buscador from "./components/search/Buscador";

export function App() {
  return (
    <>
      <main className="main-container">
        <Buscador />
        <Clima />
        <Clima_dia />
        <Clima_week />
      </main>
    </>
  );
}
