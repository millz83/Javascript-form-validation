function ValForm() {
    let userName = document.forms["regForm"]["Name"];
    let email = document.forms["regForm"]["Email"];
    let pwd = document.forms["regForm"]["Password"];

if (userName.value == "") {
    userName.focus();
    document.querySelector("#nt1").innerHTML = "Please enter your name";
    return false;
}

if(email.value == ""){
    email.focus();
    document.querySelector("#nt2").innerHTML = "Please enter a valid email address";
    return false;
}

if(email.value.indexOf('@', 0) < 0){
    email.focus();
    document.querySelector("#nt2").innerHTML =  "Email address must contain '@'.";
    return false;
}


if(email.value.indexOf('.', 0) < 0){
    email.focus();
    document.querySelector("#nt2").innerHTML = " Email address must contain '.com'.";
    return false;
}
if(pwd.value == "") {
    pwd.focus();
    document.querySelector("#nt3").innerHTML = "Please enter password.";
    return false;
}
if(pwd.value < 8) {
    pwd.focus();
    document.querySelector("#nt3").innerHTML = "Password must not be less than 8.";
    return false;
}

return true;

}





