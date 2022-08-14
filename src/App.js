import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const [foodsList, setFoods] = useState(foods);

  return (
    <div className="App">
      <div className="container">
        <h1 className="separator">Food List</h1>
      </div>
      <div>
        {foodsList.map((food) => {
          return <FoodBox key={food.name} food={food} />;
        })}
      </div>
    </div>
  );
}
export default App;
