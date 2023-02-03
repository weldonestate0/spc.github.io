		// <!-- Imports + Configurations -->
	
			// Import the functions you need from the SDKs you need
			import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js"; 
            import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
            import {getDatabase, ref, get, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";  
			// TODO: Add SDKs for Firebase products that you want to use
			// https://firebase.google.com/docs/web/setup#available-libraries
		  
            const firebaseConfig = {
                apiKey: "AIzaSyB5NB5g_1TAvZvINU4o_KV1Q-Xp1k4OY0k",
                authDomain: "socialprofilecard-fa7d1.firebaseapp.com",
                projectId: "socialprofilecard-fa7d1",
                storageBucket: "socialprofilecard-fa7d1.appspot.com",
                messagingSenderId: "79332485464",
                appId: "1:79332485464:web:5f68d9ba4c5f501f049d2d"
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
				get(child(dbref, "users/" + "abc")).then((snapshot)=>{
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
                        var addressb = "Address: " + snapshot.val().Address;
                        document.getElementById("addressa").innerHTML = addressb;
                        document.getElementById("extraLink").href = snapshot.val().ExtraLink;
                        // console.log(snapshot.val());
                        // document.getElementById("usernamea").value = snapshot.val().Username;   0
                        // document.getElementById("emaila").value = snapshot.val().Email;   0
                        // document.getElementById("passworda").value = snapshot.val().Password;  0
					    // console.log(snapshot.val().UserID);  
                    if(snapshot.val().ProfilePic !== ""){
                        $("#pp1").show();
                    }
                    if(snapshot.val().FullName  !== ""){
                        $("#text01").show();
                    }
                    if(snapshot.val().Bio  !== ""){
                        $("#text02").show();
                    }
                    if(snapshot.val().PhoneNumber !== ""){
                        $("#MakeaCallLinkElement").show();
                    }
                    if(snapshot.val().WhatsAppNumber !== ""){
                        $("#whatsAppLinkElement").show();
                    }
                    if(snapshot.val().Instagram !== ""){
                        $("#instagramLinkElement").show();
                    }
                    if(snapshot.val().Facebook !== ""){
                        $("#facebookLinkElement").show();
                    }
                    if(snapshot.val().Snapchat !== ""){
                        $("#snapchatLinkElement").show();
                    }
                    if(snapshot.val().TikTok !== ""){
                        $("#tiktokLinkElement").show();
                    }
                    if(snapshot.val().YouTube !== ""){
                        $("#youtubeLinkElement").show();
                    }
                    if(snapshot.val().Twitter !== ""){
                        $("#twitterLinkElement").show();
                    }
                    if(snapshot.val().Linkedin !== ""){
                        $("#linkedinLinkElement").show();
                    }
                    if(snapshot.val().Pinterest !== ""){
                        $("#pinterestLinkElement").show();
                    }
                    if(snapshot.val().Telegram !== ""){
                        $("#telegramLinkElement").show();
                    }
                    if(snapshot.val().EmailAddress !== ""){
                        $("#emailLinkElement").show();
                    }
                    if(snapshot.val().SoundCloud !== ""){
                        $("#soundCloudLinkElement").show();
                    }
                    if(snapshot.val().Spotify !== ""){
                        $("#spotifyLinkElement").show();
                    }
                    if(snapshot.val().Skype !== ""){
                        $("#skypeLinkElement").show();
                    }
                    if(snapshot.val().Reddit !== ""){
                        $("#redditLinkElement").show();
                    }
                    if(snapshot.val().Address !== ""){
                        $("#addressLinkElement").show();
                    }
                    if(snapshot.val().ExtraLink !== ""){
                        $("#extraLinkElement").show();
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

