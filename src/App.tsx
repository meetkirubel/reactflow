import React from "react";
import Left from "./components/left/Left";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="app">
      <header>
      <h1> React Flow.</h1>
      <h3>@meetkirubel</h3>
      </header>
      <div className="main-container  min-h-screen">
        <Left />
        <Main />
      </div>
    </div>
  );
}

export default App;
