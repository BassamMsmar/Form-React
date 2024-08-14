import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import Forms from "./containers/Forms";

function App() {
  return (
    <>
      <div className="container">
        <Forms />
      </div>
    </>
  );
}

export default App;
