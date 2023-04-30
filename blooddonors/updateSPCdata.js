			import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js"; 
            import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
            import {getDatabase, ref, get, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";  
 

            const firebaseConfig = {
                apiKey: "AIzaSyBn4EgG5c-84Vj5m4B0iA5J-BI8JfRJXyI",
                authDomain: "spcusersdb.firebaseapp.com",
                projectId: "spcusersdb",
                storageBucket: "spcusersdb.appspot.com",
                messagingSenderId: "592571191647",
                appId: "1:592571191647:web:a6f242f7742a51babc66ea"
              };
              
			const app = initializeApp(firebaseConfig);  
            const auth = getAuth(app); 
            const database = getDatabase(app);

            function updateSPCUser(){
                // Refereces
                var username = document.getElementById("username").value.toString().toLowerCase();
                var Email =  document.getElementById("email").value;
                var Password  =  document.getElementById("password").value;
                var FullName  =  document.getElementById("FullName").value;
                var Age = document.getElementById("Age").value;
                var Gender = document.getElementById("Gender").value; 
                var PhoneNumber =  document.getElementById("PhoneNumber").value;
                var WhatsAppNumber =  document.getElementById("WhatsAppNumber").value;
                var CNICNumber = document.getElementById("CNICNumber").value;
                var Address = document.getElementById("Address").value;
                var Group = document.getElementById("Group").value; 
                var City = document.getElementById("City").value; 
                
                
                update(ref(database, "users/blooddonors/"+ username),{
                       Username : username,
                       Email :  Email,
                       Password : Password ,
                       FullName : FullName ,
                       Age : Age,
                       Gender : Gender, 
                       PhoneNumber : PhoneNumber ,
                       WhatsAppNumber : WhatsAppNumber,
                       CNICNumber : CNICNumber,
                       Address : Address ,
                       City : City,
                       Group : Group
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
                    document.getElementById("username").value == "" ;
                    document.getElementById("email").value == "" ;
                    document.getElementById("password").value == "" ;
                    // Sign-out successful. 
                    // console.log('signed out successfully')
                   }).catch((error) => {
                     // An error happened. 
                    //  console.log(error)
                    alert("Unsuccessfull, error"+error);
                   });
            }

            updatedata.addEventListener('click', updateSPCUser); 
            