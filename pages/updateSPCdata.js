
		// <!-- Imports + Configurations -->
	
			// Import the functions you need from the SDKs you need
			import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js"; 
            import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
            import {getDatabase, ref, get, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";  
            // import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
			// TODO: Add SDKs for Firebase products that you want to use
			// https://firebase.google.com/docs/web/setup#available-libraries
		  
            // const firebaseConfig = {
            //     apiKey: "AIzaSyB5NB5g_1TAvZvINU4o_KV1Q-Xp1k4OY0k",
            //     authDomain: "socialprofilecard-fa7d1.firebaseapp.com",
            //     projectId: "socialprofilecard-fa7d1",
            //     storageBucket: "socialprofilecard-fa7d1.appspot.com",
            //     messagingSenderId: "79332485464",
            //     appId: "1:79332485464:web:5f68d9ba4c5f501f049d2d"
            //   };

            const firebaseConfig = {
                apiKey: "AIzaSyBn4EgG5c-84Vj5m4B0iA5J-BI8JfRJXyI",
                authDomain: "spcusersdb.firebaseapp.com",
                projectId: "spcusersdb",
                storageBucket: "spcusersdb.appspot.com",
                messagingSenderId: "592571191647",
                appId: "1:592571191647:web:a6f242f7742a51babc66ea"
              };
              
			// Initialize Firebase
			const app = initializeApp(firebaseConfig);  
            const auth = getAuth(app); 
            const database = getDatabase(app);

            //Update Email and Password 
            function updateSPCUser(){
                // Refereces
                var username = document.getElementById("username").value;
                var Email =  document.getElementById("email").value;
                var Password  =  document.getElementById("password").value;
                var FullName  =  document.getElementById("FullName").value;
                var Bio =  document.getElementById("Bio").value;
                var EmailAddress =  document.getElementById("EmailAddress").value;
                var PhoneNumber =  document.getElementById("PhoneNumber").value;
                var WhatsAppNumber =  document.getElementById("WhatsAppNumber").value;
                var Instagram =  document.getElementById("Instagram").value;
                var Snapchat =  document.getElementById("Snapchat").value;
                var TikTok =  document.getElementById("TikTok").value;
                var YouTube =  document.getElementById("YouTube").value;
                var Linkedin =  document.getElementById("Linkedin").value;
                var Twitter =  document.getElementById("Twitter").value;
                var Facebook =  document.getElementById("Facebook").value;
                var Telegram =  document.getElementById("Telegram").value;
                var Pinterest =  document.getElementById("Pinterest").value;
                var Reddit =  document.getElementById("Reddit").value;
                var Skype =  document.getElementById("Skype").value;
                var SoundCloud =  document.getElementById("SoundCloud").value;
                var Spotify =  document.getElementById("Spotify").value;
                var Address = document.getElementById("Address").value;
                var ExtraLink = document.getElementById("ExtraLink").value; 
                
                update(ref(database, "users/"+ username),{
                       Username : username,
                       Email :  Email,
                       Password : Password ,
                       FullName : FullName ,
                       Bio :  Bio ,
                       EmailAddress :EmailAddress,
                       PhoneNumber : PhoneNumber ,
                       WhatsAppNumber : WhatsAppNumber,
                       Instagram : Instagram ,
                       Snapchat : Snapchat ,
                       TikTok :  TikTok ,
                       YouTube : YouTube ,
                       Linkedin : Linkedin,
                       Twitter : Twitter ,
                       Facebook : Facebook ,
                       Telegram : Telegram ,
                       Pinterest : Pinterest ,
                       Reddit : Reddit,
                       Skype : Skype, 
                       SoundCloud : SoundCloud,
                       Spotify : Spotify,
                       Address : Address ,
                       ExtraLink : ExtraLink
				})
				.then(()=>{ 
                    logoutSPC();
                    var modal = document.getElementById("myModal");
                    modal.style.display = "none";
					// alert("Data Updated successfully");
				})
				.catch(()=>{
					alert("Unsuccessfull, error"+error); 
				});
            }

            //Logout with Email and Password 
            function logoutSPC(){
                signOut(auth).then(() => {
                    // Sign-out successful. 
                    // console.log('signed out successfully')
                   }).catch((error) => {
                     // An error happened. 
                    //  console.log(error)
                    alert("Unsuccessfull, error"+error);
                   });
            }

            updatedata.addEventListener('click', updateSPCUser); 
            