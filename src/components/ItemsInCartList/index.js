import React from "react";
import "./style.css";
import ItemInCart from "../ItemInCart";

const ItemsInCartList = props => (
  <div className="card" style={{ width: "100%" }}>
    <div className="card-title cart-header">Food Cart</div>
    <div className="card-body">
      {props.items.map(item => (
        <div key={item.uid}>
          <ItemInCart
            name={item.name}
            price={item.price}
            id={item.uid}
            selectItemToRemove={props.selectItemToRemove}
          ></ItemInCart>
        </div>
      ))}
    </div>
  </div>
);
export default ItemsInCartList;
