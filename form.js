function setUpPages() {
    checkFirstname();
    checkLastname();
    checkEmail();
    checkAddress()
    checkAge();
    checkCity();
    checkZipCode();
    checkProvince();
    checkPassword();
    
}

function checkFirstname() {
    var firstname = document.getElementById("firstName");
    var errorDiv = document.getElementById("firstNameError");
    try {
        if (firstname.value.length < 1) {
            throw "ALL THE FIELDS ARE REQUIRED";
        }
        firstname.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profilefirstname = firstname.value;
        document.getElementById("profileUsernamef").innerHTML = profilefirstname;
        document.getElementById("profile").style.display = "block";
        document.getElementById("firstNameSection").style.display = "block";

    }

    catch (message) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = message;
        firstname.style.background = "rgb(255,233,233)";
    }
}

function checkLastname() {
    var lastname = document.getElementById("lastName");
    var errorDiv = document.getElementById("lastNameError");
    try {
        if (lastname.value.length < 1) {
            throw "ALL THE FIELDS ARE REQUIRED";
        }
        lastname.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profilelastname = lastname.value;
        document.getElementById("profileUsernamel").innerHTML = profilelastname;
        document.getElementById("profile").style.display = "block";
        document.getElementById("lastNameSection").style.display = "block";
    }

    catch (message) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = message;
        lastname.style.background = "rgb(255,233,233)";
    }
}

function checkAddress() {
    var Address = document.getElementById("address");
    var errorDiv = document.getElementById("addressError");
    try {
        if (Address.value < 1) {
            throw "ALL THE FIELDS ARE REQUIRED";
        }
        Address.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profileAddress = Address.value;
        document.getElementById("profileAddress").innerHTML = profileAddress;
        document.getElementById("address").style.display = "block";
        document.getElementById("addressSection").style.display = "block";
    }

    catch (message) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = message;
        Address.style.background = "rgb(255,233,233)";
    }
}

function checkCity() {
    var City = document.getElementById("city");
    var errorDiv = document.getElementById("cityError");
    try {
        if (City.value.length < 1) {
            throw "ALL THE FIELDS ARE REQUIRED";
        }
        City.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profileCity = City.value;
        document.getElementById("profileCity").innerHTML = profileCity;
        document.getElementById("profile").style.display = "block";
        document.getElementById("citySection").style.display = "block";
    }

    catch (message) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = message;
        City.style.background = "rgb(255,233,233)";
    }
}

function checkZipCode() {
    var postalCode = document.getElementById("postalCode");
    var errorDiv = document.getElementById("postalCodeError");
    var postalCodeCheck = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
    try {
        if (postalCodeCheck.test(postalCode.value) === false) {
            throw "ALL THE FIELDS ARE REQUIRED";
        }
        postalCode.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profilePostalCode = postalCode.value;
        document.getElementById("profilePostalCode").innerHTML = profilePostalCode;
        document.getElementById("profile").style.display = "block";
        document.getElementById("postalCodeSection").style.display = "block";
    }

    catch (message) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = message;
        postalCode.style.background = "rgb(255,233,233)";
    }
}
function checkProvince() {
    var Province = document.getElementById("province");
    var errorDiv = document.getElementById("provinceError");
    var provinceCheck = /^(QC|qc|ON|on|MN|mn|SK|sk|AB|ab|BC|bc)$/
    try {

        if (provinceCheck.value < 1) {
            throw "ALL THE FIELDS ARE REQUIRED";
        }

        if (provinceCheck.test(Province.value) === false) {
            throw "Invalid Province";
        }
        Province.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profileProvince = Province.value;
        document.getElementById("profileProvince").innerHTML = profileProvince;
        document.getElementById("profile").style.display = "block";
        document.getElementById("provinceSection").style.display = "block";
    }

    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        Province.style.background = "rgb(255,233,233)";
    }
}

function checkAge() {
    var Age = document.getElementById("age");
    var errorDiv = document.getElementById("ageError");
    var AgeCheck = document.getElementById("age");
    
    try {

        if (AgeCheck.value < 1) {
            throw "ALL THE FIELDS ARE REQUIRED";
        }
        Age.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profileAge = Age.value;
        document.getElementById("profileAge").innerHTML = profileProvince;
        document.getElementById("profile").style.display = "block";
        document.getElementById("ageSection").style.display = "block";

        if (Age.value < 18) {
            throw "Age must be at least 18 years old";
        }
        Age.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profileAge = Age.value;
        document.getElementById("profileAge").innerHTML = profileAge;
        document.getElementById("profile").style.display = "block";
        document.getElementById("ageSection").style.display = "block";
    }

    catch (message) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = message;
        Age.style.background = "rgb(255,233,233)";
    }
}

function checkPassword() {
    var Pw1 = document.getElementById("pw1");
    var Pw2 = document.getElementById("pw2");
    var errorDiv = document.getElementById("passwordError");
    var passwordCheck = document.getElementById("pw1");
    
    try {

        if (passwordCheck.value < 1) {
            throw "ALL THE FIELDS ARE REQUIRED";
        }
        if (Pw1.value.length < 6) {
            throw "Password must be longer than 6 characters, must contains one number, upper-case and an special character";
        }
        else if (Pw1.value.localeCompare(Pw2.value) !== 0) {
            throw "Passwords doesn't match";
        }    
        else if (/[A-Z]/.test(Pw1.value) === false) {
            throw "Password must contain at least one upper-case";
        }
        else if (/\d/.test(Pw1.value) === false) {
            throw "Password must contain one number";
        }
        else if (/[!@#_]/.test(Pw1.value) === false) {
            throw "Password must contain one special character";
        }
        Pw1.style.background = "";
        Pw2.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        profilepassword = Pw1.value;
    }

    catch (message) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = message;
        Pw1.style.background = "rgb(255,233,233)";
        Pw2.style.background = "rgb(255,233,233)";
    }
}


function checkEmail() {
    var emailInput = document.getElementById("email");
    var errorDiv = document.getElementById("emailError");
    var emailCheck = document.getElementById("email");
    try {

        if (emailCheck.value < 1) {
            throw "ALL THE FIELDS ARE REQUIRED";
        }
        if (emailInput.value.search("@") === -1 || emailInput.value.lastIndexOf(".") === -1) {
            throw "Invalid email";
        }
        emailInput.style.background = "";
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
        emailInput.value = emailInput.value.toLowerCase();
        profileemail = emailInput.value;
        document.getElementById("profileEmail").innerHTML = profileemail;
        document.getElementById("profile").style.display = "block";
        document.getElementById("emailSection").style.display = "block";
    }

    catch (message) {
        errorDiv.innerHTML = message;
        errorDiv.style.display = "block";
        emailInput.style.background = "rgb(255,233,233)";
    }
}


function clearForm() {
    document.getElementById("registrationForm").reset();
}

var submit = document.getElementById("registerBtn");
var clear = document.getElementById("clearBtn");

if (submit.addEventListener) {
    submit.addEventListener("click", setUpPages, false);
} else if (submit.attachEvent) {
    submit.attachEvent("onclick", setUpPages);
}

if (clear.addEventListener) {
    clear.addEventListener("click", clearForm, false);
} else if (clear.attachEvent) {
    clear.attachEvent("onclick", clearForm);
}