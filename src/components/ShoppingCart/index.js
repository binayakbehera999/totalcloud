import React from "react";
import "./style.css";
import ItemsForSaleList from "../ItemsForSaleList";
import ItemsInCartList from "../ItemsInCartList";
import { withFirebase } from "../Firebase";
import "bootstrap/dist/css/bootstrap.min.css";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.selectItemToAdd = this.selectItemToAdd.bind(this);
    this.addItemsToCart = this.addItemsToCart.bind(this);
    this.selectItemToRemove = this.selectItemToRemove.bind(this);
  }

  state = {
    itemsForSale: [],
    itemsInCart: [],
    itemsToAdd: [],
    itemsToRemove: []
  };

  selectItemToAdd = id => {
    let itemsToAdd = this.state.itemsToAdd;
    itemsToAdd.push(id);
    console.log(itemsToAdd);
    this.setState({
      itemsToAdd: itemsToAdd
    });
  };

  selectItemToRemove = id => {
    let itemsToRemove = this.state.itemsToRemove;
    itemsToRemove.push(id);
    this.setState({
      itemsToRemove: itemsToRemove
    });
  };

  addItemsToCart = () => {
    let itemsToAdd = this.state.itemsToAdd;
    itemsToAdd.forEach(item => {
      this.props.firebase.foodItem(item).update({
        inCart: true
      });
    });
    this.setState({
      itemsToAdd: []
    });
  };

  async componentDidMount() {
    this.props.firebase.foodItems().onSnapshot(snapshot => {
      let itemsForSale = [];
      let itemsInCart = [];

      snapshot.forEach(doc => {
        doc.data().inCart
          ? itemsInCart.push({ ...doc.data(), uid: doc.id })
          : itemsForSale.push({ ...doc.data(), uid: doc.id });
      });
      this.setState({
        itemsForSale: itemsForSale,
        itemsInCart: itemsInCart
      });
    });
  }

  render() {
    const { itemsForSale, itemsInCart } = this.state;
    return (
      <div className="conatiner">
        <div className="row">
          <div className="col-sm-4">
            <ItemsForSaleList
              items={itemsForSale}
              selectItemToAdd={this.selectItemToAdd}
            ></ItemsForSaleList>
          </div>
          <div className="col-sm-4">
            <ItemsInCartList items={itemsInCart}></ItemsInCartList>
          </div>
        </div>
        <button onClick={() => this.addItemsToCart()}>Add Items To Cart</button>
      </div>
    );
  }
}

export default withFirebase(ShoppingCart);
