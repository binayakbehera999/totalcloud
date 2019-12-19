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
    itemsForSale: [],
    itemsInCart: []
  };

  componentDidMount() {
    this.props.firebase.itemsForSale().onSnapshot(snapshot => {
      let itemsForSale = [];
      snapshot.forEach(doc => {
        itemsForSale.push({ ...doc.data(), uid: doc.id, select: false });
      });
      this.setState({
        itemsForSale: itemsForSale
      });
    });
    this.props.firebase.itemsInCart().onSnapshot(snapshot => {
      let itemsInCart = [];
      snapshot.forEach(doc => {
        itemsInCart.push({ ...doc.data(), uid: doc.id, select: false });
      });
      this.setState({
        itemsInCart: itemsInCart
      });
    });
  }

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
