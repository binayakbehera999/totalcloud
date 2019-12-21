import React from "react";
import "./style.css";
import ItemForSale from "../ItemforSale";

const ItemsForSaleList = props => (
  <div className="card item-list">
    <div className="card-title mt-4 shop-header">Available Options</div>
    {props.items.length ? (
      <div className="card-body item-list-body">
        {props.items.map(item => (
          <div key={item.uid}>
            <ItemForSale
              name={item.name}
              price={item.price}
              id={item.uid}
              selectItemToAdd={props.selectItemToAdd}
            ></ItemForSale>
          </div>
        ))}
      </div>
    ) : (
      <div className="card" style={{ border: "none" }}>
        <div
          className="card-body item-list-body"
          style={{ textAlign: "center", fontSize: 25 }}
        >
          <div className="card-text">NO ITEMS TO SHOP</div>
        </div>
      </div>
    )}
  </div>
);
export default ItemsForSaleList;
