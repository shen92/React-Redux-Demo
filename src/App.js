import React from 'react';
import Display from "./javascript/components/display";
import Increment from "./javascript/components/increment";
import Decrement from "./javascript/components/decrement";

import './css/app.css'
import Read from "./javascript/components/read";

function App() {
  return (
      <div className="App">
        <Display/>
        <Increment/>
        <Decrement/>
        <Read/>
      </div>
  );
}

export default App;
