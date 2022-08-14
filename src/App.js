import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';

function App() {
  const [foodsList, setFoods] = useState(foods);

  return (
    <div className="App">
      <div class="container">
        <h1 class="separator">Food List</h1>
      </div>
      <div>
        {foodsList.map((food) => {
          return (
            <div key={food.name}>
              <p>{food.name}</p>
              <img width="150px" src={food.image} alt={`Pic of ${food.name}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
