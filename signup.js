
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


            createuser.addEventListener('click', signupSPC); 
            //SignUpWith Email and Password 
            function signupSPC(){
                // References 
            var username = document.getElementById("username").value;
			var email = document.getElementById("email").value;
			var password = document.getElementById("password").value; 
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                    // Signed in 
                 const user = userCredential.user;
                     // ...
                     set(ref(database, 'users/' + username), {
                       UserID : user.uid,
                       ProfilePic : "",
                       Username : username,
                       Email : email,
                       Password : password, 
                       FullName : "",
                       Bio : "",
                       EmailAddress : "", 
                       PhoneNumber : "",
                       WhatsAppNumber : "",
                       Instagram : "", 
                       Snapchat : "", 
                       TikTok : "", 
                       YouTube : "", 
                       Linkedin : "", 
                       Twitter : "", 
                       Facebook : "", 
                       Telegram : "", 
                       Pinterest : "", 
                       Address : "", 
                       ExtraLink : ""
                    })
                    .then(() => {
                 // Data saved successfully!
                 //console.log('User Created Successfully.')
                //  alert("User Created Successfully.");  
                window.location.href = "https://socialprofilecard.com/userprofile-page";

                 // send email verification
                 sendEmailVerification(auth.currentUser)
                 .then(() => {
                     // Email verification sent! 
                     console.log('Email verification sent!'); 
                     alert('Email verification sent! Check your email to verify your account.')
                 });
                    })
                .catch((error) => {
                  // The write failed...
                  alert(error);
                    });    
                 })
                .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert(errorMessage);
                });
            }

