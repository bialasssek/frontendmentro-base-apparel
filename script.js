const submitBtn = document.querySelector(".submit-btn");
const inputForm = document.querySelector("#email-address");
const errorIcon = document.querySelector(".icon-error");
const errorText = document.querySelector(".error-message");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputForm.validity.typeMismatch) {
    inputForm.style.border = "2px solid var(--clr-primary-700)";
    errorIcon.classList.remove("hidden");
    errorText.classList.remove("hidden");
  }
});

inputForm.addEventListener("input", () => {
  errorIcon.classList.add("hidden");
  errorText.classList.add("hidden");
  inputForm.style.border = "1px solid var(--clra-primary-400)";
});
