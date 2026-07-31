function validateForm(event){

event.preventDefault();

let email=document.getElementById("email").value;

let password=document.getElementById("pwd").value;

let passwordPattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

if(email==""){

alert("Enter Email");

return;

}

if(!passwordPattern.test(password)){

alert("Invalid Password");

return;

}

alert("Login Successful");

window.location="index.html";

}