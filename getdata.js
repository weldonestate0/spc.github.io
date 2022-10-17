
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

            //Get User Data with Email and Password 
            // getuserdata.addEventListener('click',(e)=>{
            // getData();

            // }); 
            window.onload = function(){
                    getDataSPC();
            };

            function getDataSPC(){
                console.log("abcs"); 
                const user = userCredential.user;
                // References 
            var username = document.getElementById("username").value;
				const dbref = ref(database); 
				get(child(dbref, "users/" + user.uid)).then((snapshot)=>{
					if(snapshot.exists())
					{
                        // console.log(snapshot.val());
                        document.getElementById("username").value = snapshot.val().Username;
                        document.getElementById("email").value = snapshot.val().Email;
                        document.getElementById("password").value = snapshot.val().Password;
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
