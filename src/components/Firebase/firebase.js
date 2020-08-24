import app from "firebase/app";

const config = {
  apiKey: "AIzaSyBfAHAes3YRGGPXvUsNkl9WltISSLSzVDI",
  authDomain: "woplanner-483db.firebaseapp.com",
  databaseURL: "https://woplanner-483db.firebaseio.com",
  projectId: "woplanner-483db",
  storageBucket: "woplanner-483db.appspot.com",
  messagingSenderId: "353724999512",
  appId: "1:353724999512:web:d9176aca8994c7750ee72d",
};

const Firebase = () => {
  app.initializeApp(config);
};

export default Firebase;
