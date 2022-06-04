import { initializeApp } from "firebase/app";

// firebase configuration

const app = initializeApp({
  apiKey: "process.env.REACT_APP_API_KEY",
  authDomain: "process.env.REACT_APP_AUTH_DOMAIN",
  projectId: "process.env.REACT_APP_PROJECT_ID",
  storageBucket: "process.env.REACT_APP_STORAGE_BUCKET",
  messagingSenderId: "process.env.REACT_APP_MESSAGING_SENDER_ID",
  appId: "process.env.REACT_APP_ID",
  databaseURL: "process.env.REACT_APP_DATABASE_URL",

  //apiKey: "AIzaSyD0oPzNJwox94RZBTydETPGAvdnCaV5Po8",
  //apiKey: "process.env.REACT_APP_API_KEY",
  // databaseURL: "https://react-dev-4867d-default-rtdb.asia-southeast1.firebasedatabase.app",
  //databaseURL: "process.env.REACT_APP_DATABASE_URL",
});

export default app;
