var submit = document.getElementById("submit");
var emailInput = document.getElementById("email");
var errorMessage = document.getElementById("error-message");
var character = "@";

submit.addEventListener("click", function () {
  if (!emailInput.value.includes(character)) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none"
  }
})