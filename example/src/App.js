import React from 'react';
import DayJS from '@startupquickstart/react-dayjs';

function App() {
  const date = "2000-01-31T12:59-0500";
  return (
    <div className="App">
      <header className="App-header">
        <DayJS>{ date }</DayJS>
      </header>
    </div>
  );
}

export default App;
