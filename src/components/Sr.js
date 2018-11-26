import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sr extends Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = async () => {
    const N_search = this.props.location.state.recipe;
    const res = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${N_search}`
    );
    const value = await res.json();
    console.log(value);
    if (value) {
      this.setState(() => ({ activeRecipe: value.recipes[0] }));
    } else {
      alert("Server error or maintance");
    }
    console.log(value.recipes[0]);
  };

  render() {
    console.log(this.props);
    const recipe = this.state.activeRecipe;
    return (
      <div>
        {this.state.activeRecipe.length !== 0 && (
          <div className="container">
            <div className="active-recipe">
              <img
                className="active-recipe__img"
                src={recipe.image_url}
                alt={recipe.title}
              />
              <h3 className="active-recipe__title">{recipe.title}</h3>
              <h1 className="active-recipe__publisher">
                publisher : <span>{recipe.publisher}</span>
                <p className="active-recipe__website">
                  Website :{" "}
                  <span>
                    <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
                  </span>
                </p>
              </h1>
              <button className="active-recipe__button">
                <Link to="/">Go To Home page</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Sr;
