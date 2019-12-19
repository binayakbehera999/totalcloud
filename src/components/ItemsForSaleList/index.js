import React from "react";
import "./style.css";
import ItemForSale from "../ItemforSale";

const ItemsForSale = props => (
  <div class="card" style={{ width: "30rem" }}>
    <div class="card-title" className="text-design">
      Available Options
    </div>
    <div class="card-body">
      {props.items.map(item => (
        <ItemForSale
          name={item.name}
          price={item.price}
          id={item.uid}
        ></ItemForSale>
      ))}
    </div>
  </div>
);
export default ItemsForSale;
