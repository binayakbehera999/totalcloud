import React from "react";
import "./style.css";
import ItemForSale from "../ItemforSale";

const ItemsForSaleList = props => (
  <div className="card" style={{ width: "100%" }}>
    <div className="card-title text-design">Available Options</div>
    <div className="card-body">
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
  </div>
);
export default ItemsForSaleList;
