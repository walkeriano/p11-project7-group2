
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYvABM5cOWVbQ4e_eEH7GkeVKYzSVIuPU",
  authDomain: "cheff-yourself.firebaseapp.com",
  projectId: "cheff-yourself",
  storageBucket: "cheff-yourself.appspot.com",
  messagingSenderId: "471421680992",
  appId: "1:471421680992:web:c5af33c16cf62064d0b205"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app as default };