import app from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyC43G1hA142EvlphZ4GuqgQRD-axzknmn4",
  authDomain: "totalcloud-6f72d.firebaseapp.com",
  databaseURL: "https://totalcloud-6f72d.firebaseio.com/",
  projectId: "totalcloud-6f72d",
  storageBucket: "totalcloud-6f72d.appspot.com",
  messagingSenderId: "212692253235"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.firestore();
  }

  itemToAdd = uid => this.db.doc(`itemsForSale/${uid}`);
  itemsForSale = () => this.db.collection("itemsForSale");

  itemToRemove = uid => this.db.doc(`itemsInCart/${uid}`);
  itemsInCart = () => this.db.collection("itemsInCart");
}
export default Firebase;
