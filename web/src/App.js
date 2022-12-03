import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import AlwaysRender from './js/AlwaysRender/AlwaysRender';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Speech Text Summarization';
  });

  return (
    <div className="App">
      <AlwaysRender></AlwaysRender>
    </div>
  );
}

export default App;
