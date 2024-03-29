		// <!-- Imports + Configurations -->
	
			// Import the functions you need from the SDKs you need
			import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js"; 
            import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
            import {getDatabase, ref, get, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";  
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

            // $( document ).ready(function() {
            //     // console.log( "ready!" );
            //     getSPCData();
            // });


            function getSPCData() {     
              document.getElementById("loadera").style.display = "block";
  
                const dbref = ref(database); 
                const usersRef = child(dbref, "users/blooddonors/");
                const userCardsContainer = document.getElementById('user-cards'); 
                userCardsContainer.innerHTML = '';
                const blooddonatepic = document.getElementById("blooddonatepic");
                let donorFound = false; // to keep track of whether a donor has been found or not

                if(document.getElementById("Group").value=="" || document.getElementById("City").value==""){
                  document.getElementById("loadera").style.display = "none";
                  alert("Select City and Blood Group first.")
                }
                else{

                get(usersRef).then((snapshot) => {
                  if (snapshot.exists()) {
                    snapshot.forEach((childSnapshot) => {
                    //   console.log(childSnapshot.val().FullName);
                        
                    if(childSnapshot.val().City == document.getElementById("City").value && childSnapshot.val().Group == document.getElementById("Group").value){
                        // console.log(childSnapshot.val().FullName);
                        const card = document.createElement('div');
                        card.classList.add('card');
                        card.innerHTML = `
          <div class="media" style="background-color: #353541; color:#f9f9f9;">
          <div class="media-body ml-2">
            <h5 id="FullName" class="mt-1"><strong>Name: </strong> ${childSnapshot.val().FullName}</h5>
              <p id="Age" ><strong>Age: </strong> ${childSnapshot.val().Age} y/o</p>
              <p id="group" ><strong>Blood Group: </strong> ${childSnapshot.val().Group}</p>
              <p id="Gender" ><strong>Gender: </strong> ${childSnapshot.val().Gender}</p>
              <p id="city"><strong>City: </strong> ${childSnapshot.val().City}</p>
              <p id="PhoneNumber"><strong>Phone Number: </strong> ${childSnapshot.val().PhoneNumber}</p>
              <p id="WhatsAppNumber" class="mb-0"><strong>WhatsApp Number: </strong> ${childSnapshot.val().WhatsAppNumber}</p>
          </div>
          <img id="ProfilePicture" class="align-self-center mr-1 rounded-circle" src="${childSnapshot.val().ProfilePic}" alt="Profile Picture" width="150" height="150">
          </div>
          `;
                    userCardsContainer.appendChild(card);           
                    if (blooddonatepic) {
                      blooddonatepic.remove();
                    }
                    donorFound = true;
                    document.getElementById("loadera").style.display = "none";
                       
                    }
                    });
                  }
                  if(!donorFound) {
                    // alert("No Donor Found");
                    // userCardsContainer.innerHTML = '<br><br><h2 style="text-align: center; color: #f9f9f9;">No Donor Available</h2>';
                      // blooddonatepic.remove();
                      if (blooddonatepic) {
                        document.getElementById("loadera").style.display = "none";
                        userCardsContainer.innerHTML = '<br><br><h2 style="text-align: center; color: #f9f9f9;">No Donor Available</h2>';
                        blooddonatepic.remove();
                      }
                  }
                })
                .catch((error) => { 
                  alert("Unsuccessful, error: " + error);
                });}
              }
              

               // document.getElementById("ProfilePicture").src = childSnapshot.val().ProfilePic;
                        // document.getElementById("FullName").innerHTML ="<strong>Name: </strong>"+ childSnapshot.val().FullName;
                        // document.getElementById("Age").innerHTML ="<strong>Age: </strong> "+ childSnapshot.val().Age +"y/o";
                        // document.getElementById("group").innerHTML ="<strong>Blood Group: </strong> "+ childSnapshot.val().Group ;
                        // document.getElementById("Gender").innerHTML ="<strong>Gender: </strong> "+  childSnapshot.val().Gender;
                        // document.getElementById("city").innerHTML ="<strong>City: </strong> "+ childSnapshot.val().City ;
                        // document.getElementById("PhoneNumber").innerHTML ="<strong>Phone Number: </strong> "+  childSnapshot.val().PhoneNumber;
                        // document.getElementById("WhatsAppNumber").innerHTML ="<strong>WhatsApp Number:</strong> "+  childSnapshot.val().WhatsAppNumber;

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
            

            

                            // Assigning Events to the Buttons
			document.getElementById("resultsbtn").addEventListener('click', getSPCData); 
