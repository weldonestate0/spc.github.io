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

            //Logout with Email and Password 
            logoutuser.addEventListener('click',(e)=>{
                signOut(auth).then(() => {
             // Sign-out successful. 
            //  console.log('signed out successfully') 
            window.location.href = "https://socialprofilecard.com/login-page";
            }).catch((error) => {
              // An error happened. 
              console.log(error)
            });
            }); 
