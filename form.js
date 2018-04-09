function validateForm() {
    var regexFirstName = /^[a-z]+$/i;
    var firstName = document.getElementById("fname").value;
    if (firstName === "" || (!regexFirstName.test(firstName)) || firstName.length < 2) {
        document.getElementById("errfName").style.display="inline";
        return false;
    }
    var regexLastName = /^[a-z-]+$/i;
    var lastName = document.getElementById("lname").value;
    if (lastName === "" || (!regexLastName.test(lastName)) || lastName.length < 2) {
        document.getElementById("errlName").style.display="inline";
        return false;
    }
    var regexHealthNumber = /^\d{6}$/;
    var healthNumber = document.getElementById("han").value;
    if (healthNumber === "" || healthNumber.length > 9 || (!regexHealthNumber.test(parseInt(healthNumber.substring(3)))) || (healthNumber.substring(0,3) !== "ZHA")) {
        document.getElementById("errHan").style.display="inline";
        return false;
    }
    var regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var email = document.getElementById("email").value;
    if (email === "" || (!regexEmail.test(email))) {
        document.getElementById("errEmail").style.display="inline";
        return false;
    }
    var regexPhone = /^\d{11}$/;
    var phone = document.getElementById("telephone").value
    if (phone === "" || !regexPhone.test(phone)) {
        document.getElementById("errPhone").style.display="inline";
        return false;
    }
  }
