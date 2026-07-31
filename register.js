$(document).ready(function(){

$("#registerForm").submit(function(e){

e.preventDefault();

let username=$("#username").val().trim();

let mobile=$("#mobileno").val().trim();

let password=$("#password").val();

let confirm=$("#conformpassword").val();

if(username.length<3){

alert("Username must be 3 characters");

return;

}

if(!/^[0-9]{10}$/.test(mobile)){

alert("Enter valid mobile");

return;

}

if(password.length<6){

alert("Password minimum 6 characters");

return;

}

if(password!=confirm){

alert("Password not matched");

return;

}

alert("Registration Successful");

this.submit();

});

});