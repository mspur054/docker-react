import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h5>This is hello </h5>
        <h5>
          Edit <code>src/App.js</code> and save to reload.
        </h5>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is no longer okay I am in danger. Also doggos.
        </a>
      </header>
    </div>
  );
}

export default App;
