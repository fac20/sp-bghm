import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Location from "./components/Location/Location.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Location/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    {/* </Location>  */}
    </div>
  );
}

export default App;
