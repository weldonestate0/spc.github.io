
		// <!-- Imports + Configurations -->
	
			// Import the functions you need from the SDKs you need
			import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js"; 
            import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
            import {getDatabase, ref, get, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";  
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




            //Login with Email and Password 
            function loginSPCUser(){
                if(document.getElementById("username").value == "" || document.getElementById("email").value == "" || document.getElementById("password").value == "" ){
                    alert("All fields are necessary!");
                    }
                    else{
            // References 
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value; 
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log('signed in successfully');

                    var modal = document.getElementById("myModal");
                    modal.style.display = "block"; 
                    $("#wizard-picture").change(function(){
                        if (typeof (this.files) != "undefined") {
                            var size = parseFloat(this.files[0].size / (1024 * 1024)).toFixed(2); 
                            if(size > 2) {
                                alert('Please select image size less than 2 MB');
                            }else{
                                // alert('Success');
                                readURL(this);
                            }
                        }
                    });

                    //get data on input fields
                    getSPCData(); 
                     })
                    .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    // alert(errorMessage);
                    //console.log(errorMessage);
                    });
                }
            }

            // Get User Data
            function getSPCData(){                   
                // References 
            var username = document.getElementById("username").value;
				const dbref = ref(database); 
				get(child(dbref, "users/" + username)).then((snapshot)=>{
					if(snapshot.exists())
					{
                        // console.log(snapshot.val());
                        document.getElementById("wizardPicturePreview").src = snapshot.val().ProfilePic;
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
                        document.getElementById("Reddit").value = snapshot.val().Reddit;
                        document.getElementById("Skype").value = snapshot.val().Skype;
                        document.getElementById("SoundCloud").value = snapshot.val().SoundCloud;
                        document.getElementById("Spotify").value = snapshot.val().Spotify;
                        document.getElementById("Address").value = snapshot.val().Address;
                        document.getElementById("ExtraLink").value = snapshot.val().ExtraLink; 
					// console.log(snapshot.val().UserID);  
					}
					else{
						alert("No Data Found.");
					}
				})
				.catch((error)=>{ 
                    //console.log("Unsuccessful, error:"+error);
					// alert("Unsuccessful, error:"+error);
				})
            }


            var picaddress;
            function readURL(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
            
                    reader.onload = function (e) {
                        $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
                    }
                    reader.readAsDataURL(input.files[0]);
                }
                            reader.onloadend = function() {
                            picaddress = reader.result;
                            // console.log(picaddress); 
                            updateDP();
                         }
            }

            //Update Email and Password 
            function updateDP(){
                // Refereces
                var ProfilePicAdd = picaddress;
                var username = document.getElementById("username").value;    
                update(ref(database, "users/"+ username),{
                    //    UserID : user.uid, 
                       ProfilePic: ProfilePicAdd
				})
				.then(()=>{ 
                        // console.log("Profile Pic Updated Successfully");
				})
				.catch(()=>{
					// alert("Unsuccessfull, error"+error); 
                    alert("Can't update profile picture. Please contact us on WhatsApp.")
				});
            }

            
                // Assigning Events to the Buttons
			loginuser.addEventListener('click', loginSPCUser); 
        
    


