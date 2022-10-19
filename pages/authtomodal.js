
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




            //SignUpWith Email and Password
            function createSPCUser(){
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
                 console.log('User Created Successfully.')
                //  alert("User Created Successfully.");  

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
            // createuser.addEventListener('click',(e)=>{             }); 


            //Login with Email and Password 
            function loginSPCUser(){
            // References 
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value; 
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log('signed in successfully');

                    var modal = document.getElementById("myModal");
                    modal.style.display = "block";

                    //get data on input fields
                    getSPCData(); 
                     })
                    .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    alert(errorMessage);
                    });
            }

            // loginuser.addEventListener('click',(e)=>{            }); 




            function getSPCData(){                   
                // References 
            var username = document.getElementById("username").value;
				const dbref = ref(database); 
				get(child(dbref, "users/" + username)).then((snapshot)=>{
					if(snapshot.exists())
					{
                        // console.log(snapshot.val());
                        document.getElementById("usernamea").value = snapshot.val().Username;
                        document.getElementById("emaila").value = snapshot.val().Email;
                        document.getElementById("passworda").value = snapshot.val().Password;
                        document.getElementById("FullName").value = snapshot.val().FullName;
                        document.getElementById("Bio").value = snapshot.val().Bio;
                        document.getElementById("EmailAddress").value = snapshot.val().EmailAddress;
                        document.getElementById("PhoneNumber").value = snapshot.val().PhoneNumber;
                        document.getElementById("WhatsAppNumber").value = snapshot.val().WhatsAppNumber;
                        document.getElementById("Instagram").value = snapshot.val().Instagram;
                        document.getElementById("Snapchat").value = snapshot.val().Snapchat;
                        document.getElementById("TikTok").value = snapshot.val().TikTok;
                        document.getElementById("YouTube").value = snapshot.val().YouTube;
                        document.getElementById("Linkedin").value = snapshot.val().Linkedin;
                        document.getElementById("Twitter").value = snapshot.val().Twitter;
                        document.getElementById("Facebook").value = snapshot.val().Facebook;
                        document.getElementById("Telegram").value = snapshot.val().Telegram;
                        document.getElementById("Pinterest").value = snapshot.val().Pinterest;
                        document.getElementById("Address").value = snapshot.val().Address;
                        document.getElementById("ExtraLink").value = snapshot.val().ExtraLink;
					// console.log(snapshot.val().UserID); 
					}
					else{
						alert("No Data Found.");
					}
				})
				.catch((error)=>{ 
                    console.log("Unsuccessful, error:"+error);
					// alert("Unsuccessful, error:"+error);
				})
            }

		  

            // updatedata.addEventListener('click',(e)=>{              }); 

            // Assigning Events to the Buttons
			// createuser.addEventListener('click', createSPCUser); 
			loginuser.addEventListener('click', loginSPCUser); 
			updatedata.addEventListener('click', updateSPCUser); 

