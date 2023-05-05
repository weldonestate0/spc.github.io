
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



            //SignUpWith Email and Password
            function createSPCUser(){
                if(document.getElementById("username").value == "" || document.getElementById("email").value == "" || document.getElementById("password").value == "" ){
                    alert("All fields are necessary!");
                    }
                    else{
                // References 
                var username = document.getElementById("username").value.toString().toLowerCase();
                // var username = String(usernamecap).toLowerCase();
                // var username = usernamecap.toString().toLowerCase();
                // console.log(username);
                var email = document.getElementById("email").value.toLowerCase();
                var password = document.getElementById("password").value; 
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                const user = userCredential.user;
                     // ...
         set(ref(database, 'users/blooddonors/' + username), {
            UserID : user.uid,
            Username : username,
            Email : email,
            Password : password, 
            FullName : "",
            Age : "",
            Gender : "", 
            PhoneNumber : "",
            WhatsAppNumber : "",
            CNICNumber : "",
            Address : "", 
            City : "",
            ProfilePic: "https://socialprofilecard.com/assets/profilepic.webp",
            Group : ""
        })
        .then(() => {
     // Data saved successfully!
    //  console.log('User Created Successfully.')
    //  alert("User Created Successfully.");  

     // send email verification
    //  sendEmailVerification(auth.currentUser)
    //  .then(() => {
    //      // Email verification sent! 
    //     //  console.log('Email verification sent!'); 
    //      alert('Email verification sent! Check your email to verify your account.')
    //  }); 
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
                    // console.log("Unsuccessful, error:"+error);
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

            //Update Profile Pic
            function updateDP(){
                // Refereces
                var ProfilePicAdd = picaddress;
                var username = document.getElementById("username").value.toString().toLowerCase();    
                update(ref(database, "users/blooddonors/"+ username),{
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

            // function testUser(){
            //     if(document.getElementById("username").value == "" || document.getElementById("email").value == "" || document.getElementById("password").value == "" ){
            //         var modal = document.getElementById("myModal");
            //         modal.style.display = "block"; 
            //         }
            // }

 // Assigning Events to the Buttons
 createuser.addEventListener('click', createSPCUser);  