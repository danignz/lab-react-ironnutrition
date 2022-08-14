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
    /* Added state to not lost the added item when reset the search bar list */
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

  const handleDelete = (name) => {
    const remaining = foodsList.filter(elem => elem.name !== name);
    setFoods(remaining);
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="separator">Add Food Entry</h1>
        <AddFoodForm newFood={handleNewFood} />

        <h1 className="separator">Search</h1>
        <Search onSearch={handleSearch} />

        <h1 className="separator">Food List</h1>
        <div className="food-container">
          {foodsList.map((food) => {
            return <FoodBox key={food.name} food={food} onDelete={handleDelete}/>;
          })}
        </div>
      </div>
    </div>
  );
}
export default App;
