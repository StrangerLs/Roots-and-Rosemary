import React from "react";

import { Link } from "react-router-dom";

export default function Card(props) {
  if (!props.recipe) {
    return <></>;
  }

  return (
    <>
      <div className="ind-card">
        <Link id="name" to={`/recipe/${props.recipe.id}`}>
          <h2>{props.recipe.fields.itemName}</h2>
        </Link>
        <div className="ing-desc">
          <h3 id="ingredients">
            Ingredients: <br />
            {props.recipe.fields.ingredients}
          </h3>
          <h3 id="description">
            Description: <br />
            {props.recipe.fields.description}
          </h3>
        </div>
        <h4 id="cook-time">
          Cook Time: <br />
          {props.recipe.fields.cookTime}
        </h4>
      </div>
    </>
  );
}
