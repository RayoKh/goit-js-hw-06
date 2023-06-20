const refs = {
  form: document.querySelector(".login-form"),
  inputEmail: document.querySelector("[type=email]"),
  inputPass: document.querySelector("[type=password]"),
  submitBtn: document.querySelector("[type=button]"),
};

refs.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Усі поля мають бути заповненими!");
  }

  const users = {
    [`${refs.inputEmail.getAttribute("name")}`]: email.value,
    [`${refs.inputPass.getAttribute("name")}`]: password.value,
  };

  console.log(users);

  event.currentTarget.reset();
});
