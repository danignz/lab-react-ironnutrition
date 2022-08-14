import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodsList, setFoods] = useState(foods);
  const [foodsListWithAdded, setAddedList] = useState(foods);

  const handleNewFood = (food) => {
    const updatedFoods = [...foodsList];
    updatedFoods.unshift(food);
    setFoods(updatedFoods);
    /*Added state for not lost the added item whem reset the search bar list */
    setAddedList(updatedFoods);
  };

  const handleSearch = (searchValue) => {
    if (searchValue === '') {
      setFoods(foodsListWithAdded);
    } else {
      const filtered = foodsListWithAdded.filter((elem) =>
        elem.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFoods(filtered);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="separator">Add Food Entry</h1>
      </div>
      <AddFoodForm newFood={handleNewFood} />
      <div className="container">
        <h1 className="separator">Search</h1>
      </div>
      <Search onSearch={handleSearch} />
      <div className="container">
        <h1 className="separator">Food List</h1>
      </div>
      <div className="food-container">
        {foodsList.map((food) => {
          return <FoodBox key={food.name} food={food} />;
        })}
      </div>
    </div>
  );
}
export default App;
