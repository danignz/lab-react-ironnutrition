import React, { useState } from 'react';
import { Input } from 'antd';

export default function AddFoodForm({ newFood }) {
  const [food, setFood] = useState({
    name: '',
    calories: 1,
    image: '',
    servings: 1,
  });

  const handleChange = (e) => {
    const parseValue =
      e.target.name === 'calories' || e.target.name === 'servings'
        ? parseInt(e.target.value)
        : e.target.value;
    setFood((prev) => {
      return {
        ...prev,
        [e.target.name]: parseValue,
      };
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    newFood(food);
    setFood({
      name: '',
      calories: 1,
      image: '',
      servings: 1,
    });
  };

  return (
    <form className="container" onSubmit={handleForm}>
      <label>Name</label>
      <Input
        value={food.name}
        placeholder="Write a name for the food"
        type="text"
        onChange={(e) => handleChange(e)}
        name="name"
      />
      <label>Image</label>
      <Input
        value={food.image}
        placeholder="http://example.com/food-image.jpg"
        type="text"
        onChange={(e) => handleChange(e)}
        name="image"
      />
      <label>Calories</label>
      <Input
        value={food.calories}
        type="number"
        onChange={(e) => handleChange(e)}
        name="calories"
      />
      <label>Servings</label>{' '}
      <Input
        value={food.servings}
        type="number"
        onChange={(e) => handleChange(e)}
        name="servings"
      />
      <button type="submit">Create</button>
    </form>
  );
}
