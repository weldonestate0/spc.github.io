            // <!-- Imports + Configurations -->
	
			// Import the functions you need from the SDKs you need
			import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js"; 
            import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
            import {getDatabase, ref, get, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";  
            // import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
			// TODO: Add SDKs for Firebase products that you want to use
			// https://firebase.google.com/docs/web/setup#available-libraries
		  
			// Your web app's Firebase configuration
			const firebaseConfig = {
			  apiKey: "AIzaSyDBtLm1tsNrNXdwchPkHMbayF6mHRjbxU8",
			  authDomain: "socialprofilecard.firebaseapp.com",
			  projectId: "socialprofilecard",
			  storageBucket: "socialprofilecard.appspot.com",
			  messagingSenderId: "137917591206",
			  appId: "1:137917591206:web:d0abb7d53c14c616424e67"
			};
			// Initialize Firebase
			const app = initializeApp(firebaseConfig);  
            const auth = getAuth(app); 
            const database = getDatabase(app);

            loginuser.addEventListener('click', loginSPC); 
            //Login with Email and Password 
            function loginSPC(){
                            // References 
			var email = document.getElementById("email").value;
			var password = document.getElementById("password").value; 
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                    // Signed in 
                 const user = userCredential.user;
                // console.log('signed in successfully'); 
                // Simulate an HTTP redirect:
                window.location.href = "https://socialprofilecard.com/userprofile-page";
                //get data on input fields
                // getData();
                 })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert(errorMessage);
                });
            }
