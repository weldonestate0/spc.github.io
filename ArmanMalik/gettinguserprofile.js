		// <!-- Imports + Configurations -->
	
			// Import the functions you need from the SDKs you need
			import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js"; 
            import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
            import {getDatabase, ref, get, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";  
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

            $( document ).ready(function() {
                // console.log( "ready!" );
                getSPCData();
            });

            // Get User Data
            function getSPCData(){                   
                // References 
            //var username = document.getElementById("username").value;
				const dbref = ref(database); 
				get(child(dbref, "users/" + "maan")).then((snapshot)=>{
					if(snapshot.exists())
					{
                        document.getElementById("ProfilePicture").src = snapshot.val().ProfilePic;
                        document.getElementById("text01").innerHTML = snapshot.val().FullName; 
                        document.getElementById("text02").innerHTML = snapshot.val().Bio;
                        var pnum = "tel:" + snapshot.val().PhoneNumber; 
                        document.getElementById("MakeaCallLink").href = pnum; 
                        var wanum = "https://wa.me/" + snapshot.val().WhatsAppNumber + "?text=Hey%20there!%20got%20your%20reference%20from%20your%20Social%20Profile%20Card.";
                        document.getElementById("whatsAppLink").href = wanum;
                        var emA = "mailto:" + snapshot.val().EmailAddress; 
                        document.getElementById("emailLink").href = emA;
                        document.getElementById("instagramLink").href = snapshot.val().Instagram;
                        document.getElementById("facebookLink").href = snapshot.val().Facebook;
                        document.getElementById("snapchatLink").href = snapshot.val().Snapchat;
                        document.getElementById("tiktokLink").href = snapshot.val().TikTok;
                        document.getElementById("youtubeLink").href = snapshot.val().YouTube;
                        document.getElementById("twitterLink").href = snapshot.val().Twitter;
                        document.getElementById("linkedinLink").href = snapshot.val().Linkedin;
                        document.getElementById("pinterestLink").href = snapshot.val().Pinterest;
                        document.getElementById("telegramLink").href = snapshot.val().Telegram;
                        document.getElementById("soundCloudLink").href = snapshot.val().SoundCloud;
                        document.getElementById("spotifyLink").href = snapshot.val().Spotify;
                        document.getElementById("skypeLink").href = snapshot.val().Skype;
                        document.getElementById("redditLink").href = snapshot.val().Reddit;
                        document.getElementById("addressLink").href = snapshot.val().Address;
                        document.getElementById("extraLink").href = snapshot.val().ExtraLink;
                        // console.log(snapshot.val());
                        // document.getElementById("usernamea").value = snapshot.val().Username;   0
                        // document.getElementById("emaila").value = snapshot.val().Email;   0
                        // document.getElementById("passworda").value = snapshot.val().Password;  0
					    // console.log(snapshot.val().UserID);  
                    if(snapshot.val().ProfilePic == ""){
                        $("#pp1").hide();
                    }
                    if(snapshot.val().FullName  == ""){
                        $("#text01").hide();
                    }
                    if(snapshot.val().Bio  == ""){
                        $("#text02").hide();
                    }
                    if(snapshot.val().PhoneNumber == ""){
                        $("#MakeaCallLinkElement").hide();
                    }
                    if(snapshot.val().WhatsAppNumber == ""){
                        $("#whatsAppLinkElement").hide();
                    }
                    if(snapshot.val().Instagram == ""){
                        $("#instagramLinkElement").hide();
                    }
                    if(snapshot.val().Facebook == ""){
                        $("#facebookLinkElement").hide();
                    }
                    if(snapshot.val().Snapchat == ""){
                        $("#snapchatLinkElement").hide();
                    }
                    if(snapshot.val().TikTok == ""){
                        $("#tiktokLinkElement").hide();
                    }
                    if(snapshot.val().YouTube == ""){
                        $("#youtubeLinkElement").hide();
                    }
                    if(snapshot.val().Twitter == ""){
                        $("#twitterLinkElement").hide();
                    }
                    if(snapshot.val().Linkedin == ""){
                        $("#linkedinLinkElement").hide();
                    }
                    if(snapshot.val().Pinterest == ""){
                        $("#pinterestLinkElement").hide();
                    }
                    if(snapshot.val().Telegram == ""){
                        $("#telegramLinkElement").hide();
                    }
                    if(snapshot.val().EmailAddress == ""){
                        $("#emailLinkElement").hide();
                    }
                    if(snapshot.val().SoundCloud == ""){
                        $("#soundCloudLinkElement").hide();
                    }
                    if(snapshot.val().Spotify == ""){
                        $("#spotifyLinkElement").hide();
                    }
                    if(snapshot.val().Skype == ""){
                        $("#skypeLinkElement").hide();
                    }
                    if(snapshot.val().Reddit == ""){
                        $("#redditLinkElement").hide();
                    }
                    if(snapshot.val().Address == ""){
                        $("#addressLinkElement").hide();
                    }
                    if(snapshot.val().ExtraLink == ""){
                        $("#extraLinkElement").hide();
                    }



					}
					else{
						alert("No Data Found.");
					}
				})
				.catch((error)=>{ 
                    // console.log("Unsuccessful, error:"+error);
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

