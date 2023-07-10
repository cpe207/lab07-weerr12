const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#passworld-input");
const submitBtn = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-vallid");
  firstNameInput.classList.remove("is-invallid");
};
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};
emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};
passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};

summitBtn.onclick = () => {
  let isFirstNameok = false;
  let isLastNameok = false;
  let isEmailok = false;
  let isPasswordok = false;

  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameok = true;
  }

  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameok = true;
  }

  if (emailInput.value === "") {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isEmailok = true;
  }

  if (passwordInput.value.length >= 6) {
    passwordInput.classList.add("is-valid");
  } else {
    passwordInput.classList.add("is-invalid");
  }

  if (isFirstNameok) {
    alert("Registered successfully");
  }
  if (isLastNameok) {
    alert("Registered successfully");
  }
  if (isEmailok) {
    alert("Registered successfully");
  }
  if (isPasswordok) {
    alert("Registered successfully");
  }
};
