import React from "react";
import classes from './MealItem.module.css';
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    const name = props.name;
    const description = props.description;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm/>
      </div>
    </li>
  );
};

export default MealItem;
