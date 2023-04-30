			import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js"; 
            import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
            import {getDatabase, ref, get, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";  
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
                    alert(errorMessage);
                    //console.log(errorMessage);
                    });
                }
            }

            // Get User Data
            function getSPCData(){                   
                // References 
                var username = document.getElementById("username").value.toString().toLowerCase();
				const dbref = ref(database); 
				get(child(dbref, "users/blooddonors/" + username)).then((snapshot)=>{
					if(snapshot.exists())
					{
                        // console.log(snapshot.val());
                        document.getElementById("wizardPicturePreview").src = snapshot.val().ProfilePic;
                        document.getElementById("usernamea").value = snapshot.val().Username;
                        document.getElementById("emaila").value = snapshot.val().Email;
                        document.getElementById("passworda").value = snapshot.val().Password;
                        document.getElementById("FullName").value = snapshot.val().FullName;
                        document.getElementById("Age").value = snapshot.val().Age;
                        document.getElementById("Gender").value = snapshot.val().Gender;
                        document.getElementById("PhoneNumber").value = snapshot.val().PhoneNumber;
                        document.getElementById("WhatsAppNumber").value = snapshot.val().WhatsAppNumber;
                        document.getElementById("CNICNumber").value = snapshot.val().CNICNumber;
                        document.getElementById("Address").value = snapshot.val().Address;
                        document.getElementById("Group").value = snapshot.val().Group; 
                        document.getElementById("City").value = snapshot.val().City; 
                        
					// console.log(snapshot.val().UserID);  
					}
					else{
						alert("No Data Found.");
					}
				})
				.catch((error)=>{ 
                    //console.log("Unsuccessful, error:"+error);
					alert("Unsuccessful, error:"+error);
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
        
    


