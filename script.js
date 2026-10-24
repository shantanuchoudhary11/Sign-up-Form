const pass = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-password');
const errorDiv = document.getElementById("password-error");
errorDiv.textContent = "Passwords do not match"; // show the error
errorDiv.textContent = "";                        // clear it

confirmPass.addEventListener('input',validatePassword);

function validatePassword(){
    if (pass.value != confirmPass.value && confirmPass.value.length >= pass.value.length) {
    errorDiv.textContent = "Passwords do not match";  
    }
    else {
        errorDiv.textContent = "";
    }
}
