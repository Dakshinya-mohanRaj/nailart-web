import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } 
  from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCKuFqq1jYeUon9DgqMnaq6vg1tYDdTnPo",
    authDomain: "website-9a715.firebaseapp.com",
    projectId: "website-9a715",
    storageBucket: "website-9a715.firebasestorage.app",
    messagingSenderId: "1006565436423",
    appId: "1:1006565436423:web:a97c2176e5ead19a350ea2",
    measurementId: "G-TC1052C9MT"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("loginMessage");

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    message.textContent = "💅 Login successful! Redirecting...";
    message.style.color = "green";
    setTimeout(() => (window.location.href = "home.html"), 1500);
  } catch (error) {
    message.textContent = error.message;
    message.style.color = "red";
  }
});
