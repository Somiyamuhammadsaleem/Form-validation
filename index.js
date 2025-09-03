function registrationForm() {
  var  valid=true;
  let firstName = document.getElementById("firstname");
  let firstError = document.getElementById("first");

  if (firstName.value.length === 0) {
    firstError.textContent = "Please enter your first name";
    firstError.style.color = "red";
    valid=false;
  } else {
    firstError.textContent = "";
  }
  let lastName = document.getElementById("lastname");
  let lastError= document.getElementById("second");

  if (lastName.value.length === 0) {
    lastError.textContent = "Please enter your last name";
    lastError.style.color = "red";
    valid =false;
  } else {
    lastError.textContent = "";
  }

  let contactNumb = document.getElementById ("contact") ;
  let  contactError =document.getElementById ("third");
  
  if (contactNumb.value.length === 0){
    contactError.textContent="Please Enter your contact number";
    contactError.style.color="red";
    valid = false;
  }
  else{
    contactError.textContent="";
  }


  let emailId= document.getElementById("email");
  let emailError= document.getElementById("fourth");

  if (emailId.value.length === 0){
    emailError.textContent =" Please  enter your email";
    emailError.style.color="red";
    valid = false;
  }
else{
  emailError.textContent="";
}



var radios=document.getElementsByName("gender");
var genderError = document.getElementById("fifth");
var  genderSelected=true;


for (i=0; i< radios.length; i++){
if (radios[i].checked){
genderSelected =false;
break;
}
}

if(genderSelected){
genderError.textContent=("Please select gender");
genderError.style.color="red";
valid =true;
}
else{
 genderError.textContent="";
}

var selectForm = document.getElementById("select");
var selectError=document.getElementById("sixth");

if(selectForm.value  === ""){
  selectError.textContent ="Please select any option";
  selectError.style.color="red";
  valid = false;
}
else{
  selectError.textContent="";
}

 if (valid){
  window.location.href="sub.html";
    return false;
 }
 return false;

}

