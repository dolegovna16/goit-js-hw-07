const loginForm = document.querySelector(".login-form");
Array.from(loginForm.elements).forEach(
  (element) => (element.placeholder = "Type area")
);

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    loginForm.elements[0].value === "" ||
    loginForm.elements[1].value === ""
  ) {
    alert("All form fields must be filled in");
    return;
  }
  const result = {
    [loginForm.elements[0].name]: loginForm.elements[0].value.trim(),
    [loginForm.elements[1].name]: loginForm.elements[1].value.trim(),
  };
  console.log(result);
  loginForm.reset();
});
