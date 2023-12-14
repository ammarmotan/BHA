var fnameError = document.getElementById("fname-error");
function fnamevalid(){
    var name = document.getElementById("fname-input").value;
    if(name.length ==0){
        fnameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        fnameError.innerHTML = "Write Full Name";
    }
    fnameError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
    return true;
}
var emailError = document.getElementById("email-error");
function emailvalid(){
    var email = document.getElementById("email-input").value;
    if(email.length ==0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Write Full Email";
    }
    emailError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
    return true;
}