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
    itemsToRemove: [],
    loading: false
  };

  selectItemToAdd = id => {
    let itemsToAdd = this.state.itemsToAdd;

    itemsToAdd.push(id);

    this.setState({
      itemsToAdd: itemsToAdd
    });
  };

  selectItemToRemove = id => {
    let itemsToRemove = this.state.itemsToRemove;
    itemsToRemove.push(id);
    console.log(itemsToRemove);
    this.setState({
      itemsToRemove: itemsToRemove
    });
    if (!this.state.itemsToAdd.length) {
      this.setState({
        toggleSelectAdd: true
      });
    }
  };

  removeItemsFromCart = () => {
    let itemsToRemove = this.state.itemsToRemove;
    itemsToRemove.forEach(item => {
      this.props.firebase.foodItem(item).update({
        inCart: false
      });
    });
    this.setState({
      itemsToRemove: []
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
    this.setState({ loading: true });
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
        itemsInCart: itemsInCart,
        loading: false
      });
    });
  }

  render() {
    const {
      itemsForSale,
      itemsInCart,
      itemsToAdd,
      itemsToRemove,
      loading
    } = this.state;
    return (
      <div className="mt-5 shopping-cart">
        <div className="row">
          <div className="col-md-5">
            <ItemsForSaleList
              items={itemsForSale}
              selectItemToAdd={this.selectItemToAdd}
              loading={loading}
            ></ItemsForSaleList>
          </div>
          <div className="col-md-2 my-5">
            <center>
              <div className={itemsToAdd.length ? "on" : "off"}>
                <button
                  type="button"
                  className="cart-btn"
                  onClick={() => this.addItemsToCart()}
                >
                  Add To Cart
                </button>
              </div>
              <div className={itemsToRemove.length ? "on" : "off"}>
                <button
                  className="cart-btn"
                  style={{ marginTop: "2rem" }}
                  onClick={() => this.removeItemsFromCart()}
                >
                  Remove From Cart
                </button>
              </div>
            </center>
          </div>
          <div className="col-md-5">
            <ItemsInCartList
              items={itemsInCart}
              selectItemToRemove={this.selectItemToRemove}
              loading={loading}
            ></ItemsInCartList>
          </div>
        </div>
      </div>
    );
  }
}

export default withFirebase(ShoppingCart);
