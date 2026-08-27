import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBp_T_VIO7gbzvsgF27BiEn6hiGLxhTiyQ",
  authDomain: "tokyo-bomet-95213.firebaseapp.com",
  projectId: "tokyo-bomet-95213",
  storageBucket: "tokyo-bomet-95213.firebasestorage.app",
  messagingSenderId: "641132409989",
  appId: "1:641132409989:web:cdcecb1a0b9433ea5fa5ec"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
