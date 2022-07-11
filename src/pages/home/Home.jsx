import React from "react";
import "./Home.css";

const Home = ({ handleSearchValues }) => {
  return (
    <div className="container">
      <form >
        <input
          type="type"
          name="query"
          id="query"
          placeholder="Write what you have"
          onChange={handleSearchValues}
        />
        
        <button>Search</button>

        <select name="mealType" id="mealType" onChange={handleSearchValues}>
          <option name="breakfast">Breakfast</option>
          <option name="lunch">Lunch</option>
          <option name="dinner">Dinner</option>
          <option name="snack">Snack</option>
          <option name="teatime">Teatime</option>
        </select>
      </form>
    </div>
  );
};

export default Home;
