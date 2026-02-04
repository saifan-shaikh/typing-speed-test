// import { useState } from 'react'

import Header from "./components/Header";
import Details from "./components/details";
// css import
import "./App.css";

const App = () => {
  return (
    <div className="main-container">
      {/* header */}
      <Header />
      {/* details */}
      <Details />

      <p style={{color:"white"}}>Hello World</p>
    </div>
  );
};

export default App;
