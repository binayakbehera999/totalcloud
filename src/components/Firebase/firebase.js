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

  foodItem = uid => this.db.doc(`foodItems/${uid}`);
  foodItems = () => this.db.collection("foodItems");
}

export default Firebase;
