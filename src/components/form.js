import React from "react";

const Form = props => (
  <form action="" onSubmit={props.getRecipe}>
    <input className="form__input" type="text" name="data" id="" />
    <button className="form__button">Search</button>
  </form>
);

export default Form;
