import './App.css';

function App() {
  return (
    <div className="App">
      <User name="Ashiq" age={31} email="gmarrolin@gmail.com" />
      <User name="Masum" age={32} email="abdullahal@gmail.com" />
    </div>
  );
  }

const User = (props)  => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  )
}

export default App;
