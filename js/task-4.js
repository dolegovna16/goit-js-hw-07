const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  const info = {
    email: email,
    password: password,
  };
  if (email === '' || password === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(info);

  form.reset();
});