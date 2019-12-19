import React from "react";
import "./style.css";
import ItemsForSaleList from "../ItemsForSaleList";
import ItemsInCartList from "../ItemsInCartList";
import { withFirebase } from "../Firebase";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    itemsForSale: {},
    itemsInCart: {}
  };

  componentDidMount() {}

  render() {
    const { itemsForSale, itemsInCart } = this.state;
    return (
      <div className="shopping-cart">
        <ItemsForSaleList items={itemsForSale}></ItemsForSaleList>
        <ItemsInCartList items={itemsInCart}></ItemsInCartList>
      </div>
    );
  }
}

export default withFirebase(ShoppingCart);
