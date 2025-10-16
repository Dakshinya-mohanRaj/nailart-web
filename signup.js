import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } 
  from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// 🔥 Replace with your Firebase config
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

// If user is already logged in, go straight to home
onAuthStateChanged(auth, user => {
  if (user) {
    window.location.href = "home.html";
  }
});

document.getElementById("signupBtn").addEventListener("click", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("message");

  if (!email || !password) {
    msg.textContent = "Enter email and password.";
    msg.style.color = "red";
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    msg.textContent = "✅ Account created! Redirecting...";
    msg.style.color = "green";
    setTimeout(() => (window.location.href = "home.html"), 700);
  } catch (error) {
    msg.textContent = error.message;
    msg.style.color = "red";
  }
});
