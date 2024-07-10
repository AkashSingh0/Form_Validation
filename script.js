const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const Re_password = document.getElementById('Re-password');
const form = document.getElementById('form');

const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const pass_error = document.getElementById('pass_error');
const pass_errorr = document.getElementById('pass_errorr');

form.addEventListener('submit', (e) => {
    let email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    let valid = true;

    if (name.value === '' || name.value == null) {
        valid = false;
        name_error.innerHTML = "Name is required";
    } else {
        name_error.innerHTML = "";
    }

    if (!email.value.match(email_check)) {
        valid = false;
        email_error.innerHTML = "Valid Email is required";
    } else {
        email_error.innerHTML = "";
    }

    if (password.value.length <= 8) {
        valid = false;
        pass_error.innerHTML = "Password must be more than 8 characters";
    } else if (password.value.length >= 20) {
        valid = false;
        pass_error.innerHTML = "Password cannot be more than 20 characters";
    } else if (password.value.toLowerCase() === 'password') {
        valid = false;
        pass_error.innerHTML = "Password cannot be 'password'";
    } else if (Re_password.value !== password.value) {
        valid = false;
        pass_errorr.innerHTML = "Passwords do not match";
    } else {
        pass_errorr.innerHTML = "";
    }

    if (!valid) {
        e.preventDefault();
    }
});
