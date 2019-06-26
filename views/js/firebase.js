
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCjMgU57BQ0YxUyyfZSS-AvsEzTld0DQZg",
    authDomain: "canon-4f6d8.firebaseapp.com",
    databaseURL: "https://canon-4f6d8.firebaseio.com",
    projectId: "canon-4f6d8",
    storageBucket: "canon-4f6d8.appspot.com",
    messagingSenderId: "308709021912",
    appId: "1:308709021912:web:8cf6f77688d63e69"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//check if logged in
function SignInWithEmail() {
    var txtemail = document.getElementById('txtemail');
    var txtpassword =document.getElementById('txtpassword')
    var email = txtemail.value;
    var pass = txtpassword.value;
     firebase.auth().signInWithEmailAndPassword(email, pass)
        .then( function (user) {
            alert('logged in Successfully')
            var user=firebase.auth().currentUser
            console.log(user)
        })
        .catch(function(error) {
        alert('Log in Failed')
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}  
function checkIfLogedIn(){
  var user = firebase.auth().currentUser
  firebase.auth().onAuthStateChanged(function(user){
    console.log(user)
    if(user){
        console.log(user)
        var email=user.email
        document.getElementById('loginButton').setAttribute('style','display: none;visibility: hidden;')
        document.getElementById('logoutButton').setAttribute('style','display: inline-block;visibility: visible;')
    }else{
        //document.getElementById('loginButton').setAttribute('style','display: inline-block;visibility: visible;')
        document.getElementById('logoutButton').setAttribute('style','display: none;visibility: hidden;')   }
  })
}

window.onload=function(){
  checkIfLogedIn()
}
function signOut(){
  firebase.auth().signOut()
 checkIfLogedIn()

}


