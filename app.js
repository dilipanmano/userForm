document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("pincode").addEventListener("blur", validatePincode);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName() {
    formName = document.getElementById("name");
    re = /^[a-zA-Z]{2,20}$/;
    if (!re.test(formName.value)) {
        formName.classList.add("is-invalid");
    } else {
        formName.classList.remove("is-invalid");
    }
}

function validateEmail() {
    email = document.getElementById("email");
    re = /^([a-zA-z0-9_\-\.]+)@([a-zA-z0-9_\-\.]+)\.([a-zA-z]){2,5}$/;
    if (!re.test(email.value)) {
        email.classList.add("is-invalid");
    } else {
        email.classList.remove("is-invalid");
    }
}

function validatePincode() {
    pincode = document.getElementById("pincode");
    re = /^[0-9]{6}$/;
    if (!re.test(pincode.value)) {
        pincode.classList.add("is-invalid");
    } else {
        pincode.classList.remove("is-invalid");
    }
}

function validatePhone() {
    phone = document.getElementById("phone");
    re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    if (!re.test(phone.value)) {
        phone.classList.add("is-invalid");
    } else {
        phone.classList.remove("is-invalid");
    }
}
