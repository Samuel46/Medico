// initialize Firebase
// -------------------------------------------- //
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDi2pP0JpzgRG4SioTi84QTgoJTL3P-ZPE",
  authDomain: "medico-c95b6.firebaseapp.com",
  databaseURL: "https://medico-c95b6.firebaseio.com",
  projectId: "medico-c95b6",
  storageBucket: "medico-c95b6.appspot.com",
  messagingSenderId: "723247093884",
  appId: "1:723247093884:web:b3aa64d30672ed1cd911f9",
  measurementId: "G-FV3G46SZ1N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get elements
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");

// Add login event
btnLogin.addEventListener("click", e => {
  // Get email and pass
  const email = txtEmail.Value;
  const pass = txtPassword.Value;
  const auth = firebase.auth();
  // Sign in new users
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

// Add signup event
btnSignUp.addEventListener("click", e => {
  const email = txtEmail.Value;
  const pass = txtPassword.Value;
  const auth = firebase.auth();
  // Sign in new users
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

// Logout button
btnLogout.addEventListener("click", e => {
  firebase.auth().signOut();
});

// Addd a realtime listener
firebase.auth().onAuthStateChange(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
    // redirect to the report page
    btnLogout.classList.remove("hide");
  } else {
    // display an error message telling the user to create an account
    console.log("not logged in");
    btnLogout.classList.add("hide");
  }
});
