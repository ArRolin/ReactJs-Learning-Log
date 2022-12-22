import './App.css';

function App() {
  const age = 31;
  const names = ["Ashiq", "Masum", "Monir", "Morshed", "Saidur", "Ruhul"];
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ]
  return (
    <div className="App">
      <h2>You are {age >= 18 ? "Adult!" : "Teenager" } </h2>
      <h2>Names:</h2>
      {names.map((name, key) => {
        return <h3 key={key}> - {name}</h3>
      })}

      <div>
        <h2>Gas Planets list:</h2>
        {planets.map(
          (planet, key) => planet.isGasPlanet &&  <h3>{planet.name}</h3>
        )}
      </div>
    </div>
  );
}

export default App;
