import React from 'react';
import './App.scss';
import Album from './Album/Album';

function App() {
  const albums = [];

  for (let i = 1; i <= 10; i++){
    albums.push(<Album id={i} key={i}/>);
  }

  return (
    <div className="App">
      <h1>Images App</h1>
      <hr />
      <div className="App__albums">
        { albums }
      </div>
    </div>
  );
}

export default App;
