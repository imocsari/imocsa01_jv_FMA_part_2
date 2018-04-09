function validateForm() {
    var regexFirstName = /^[a-z]+$/i;
    var firstName = document.getElementById("fname").value;
    if (firstName === "" || (!regexFirstName.test(firstName))) {
        document.getElementById("errfName").style.display="inline";
        return false;
    }
    var regexLastName = /^[a-z -]+$/i;
    var lastName = document.getElementById("lname").value;
    if (lastName === "" || (!regexLastName.test(lastName))) {
        document.getElementById("errfName").style.display="inline";
        return false;
    }
    if (document.getElementById("han").value === "") {
        document.getElementById("errHan").style.display="inline";
        return false;
    }
    var regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var email = document.getElementById("email").value;
    if (email === "" || (!regexEmail.test(email))) {
        document.getElementById("errEmail").style.display="inline";
        return false;
    }
    if (document.getElementById("telephone").value === "") {
        document.getElementById("errPhone").style.display="inline";
        return false;
    }
  }
