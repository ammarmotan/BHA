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

// search//
var pages = [
    { name: "muslim blog", url: "Muslim Page.html" },
    { name: "hindu blog", url: "Hindu Page.html" },
    { name: "christian blog", url: "Christian.html" },
    { name: "sikh blog", url: "Sikh Page.html" },
    { name: "about", url: "about.html" },
    { name: "contact us", url: "cont.html" },
    { name: "gallery", url: "gallery.html" }
  ];
  
  function search() {
    var input = document.getElementById('searchBar').value;
    for (var i = 0; i < pages.length; i++) {
      if (input.toLowerCase() === pages[i].name.toLowerCase()) {
        window.location.href = pages[i].url;
        return;
      }
    }
    alert('Page not found!'); // Alert if page is not found
  }
  // search//