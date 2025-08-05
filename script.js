const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email");
  const pwd = document.getElementById("password");
  const error = document.querySelector(".errors");
  const successMsg = document.querySelector(".success");
  let valid = true;

  error.textContent = "";

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value === "" || pwd.value === "") {
    error.textContent = "All fields are required";
    valid = false;
  } else if (!regex.test(email.value)) {
    error.textContent = "Email form is not valid";
    valid = false;
  } else if (pwd.value.length < 8) {
    error.textContent = "Password must be at least 8 Characters";
    valid = false;
  }

  if (valid) {
    successMsg.textContent = "Logged In Successfully!";
  }
});
