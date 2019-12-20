import React from "react";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="container-fluid">
      <Landing></Landing>

      <ShoppingCart></ShoppingCart>
    </div>
  );
}

export default App;
