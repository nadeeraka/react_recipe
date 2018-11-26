import React, { Component } from "react";
import Form from "./components/form";
import "./App.css";

import Recipe from "./components/recipe";

//if api throw error
//https://cors-anywhere.herokuapp.com/

class App extends Component {
  state = {
    recipes: [],
    error: ""
  };
  getRecipe = async e => {
    e.preventDefault();
    const recipeName = e.target.elements.data.value.trim();
    if (!(recipeName.length > 2)) {
      // use modal
      alert("Invalid");
      return this.setState(() => ({ error: "Opps! invalid " }));
    } else {
      const SEARCH = recipeName;

      const Api_data = await fetch(
        `https://www.food2fork.com/api/search?key=${API_KEY}&q=${SEARCH}&page=1`
      );
      const data = await Api_data.json();
      console.log(data);
      console.log(data.recipes);
      if (data.count > 0) {
        this.setState(() => ({ recipes: data.recipes }));
      } else {
        this.setState(() => ({ error: "Item not found!" }));
      }
    }
  };
  // componentDidMount = () => {
  //   const data = localStorage.getItem("recipes");
  //   const recipes = JSON.parse(data);
  //   this.setState(() => ({ recipes }));
  // };

  // componentDidUpdate = () => {
  //   const recipes = JSON.stringify(this.state.recipes);
  //   localStorage.setItem("recipes", recipes);
  // };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />;
        <Recipe recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
