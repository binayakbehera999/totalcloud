import React from "react";
import "./style.css";
import ItemInCart from "../ItemInCart";

const ItemsInCartList = props => (
  <div className="card item-list" id="shoppingcart">
    <div className="card-title mt-4 cart-header">Food Cart</div>
    {props.items.length ? (
      <div className="card-body item-list-body">
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
    ) : (
      <div className="card cart-card" style={{ border: "none" }}>
        <div
          className="card-body item-list-body"
          style={{ textAlign: "center", fontSize: 25 }}
        >
          <div className="card-text">
            NO ITEMS IN CART<br></br>
            <span style={{ fontSize: 18 }}>
              <em>Select item to add</em>
            </span>
          </div>
        </div>
      </div>
    )}
  </div>
);
export default ItemsInCartList;
