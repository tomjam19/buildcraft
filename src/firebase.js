import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

console.log("🚨 Using TEMP hardcoded Firebase config");

const firebaseConfig = {
  apiKey: "AIzaSyCKv0s2RfBbZbiFaIgydVdSvbnEKtBGQAg",
  authDomain: "buildcraft-ai.firebaseapp.com",
  projectId: "buildcraft-ai",
  storageBucket: "buildcraft-ai.appspot.com",
  messagingSenderId: "927889187714",
  appId: "1:927889187714:web:00ff30c0c255fa008c2320"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };