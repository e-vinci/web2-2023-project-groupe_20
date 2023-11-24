import { clearPage } from '../../utils/render';

const RegisterPage = () => {
  clearPage();
  renderRegisterForm();
};

function renderRegisterForm() {
  const main = document.querySelector('main');

  const form = document.createElement('form');
  form.className = 'p-5';

  const formDiv = document.createElement('div');
  formDiv.id = 'formDiv';

  const title = document.createElement('h1');
  title.innerHTML = 'Register';
  title.id = 'titleForm';
  title.className = 'text-center';

  const username = document.createElement('input');
  username.type = 'text';
  username.id = 'username';
  username.placeholder = 'Username';
  username.required = true;
  username.className = 'form-control mb-3';

  const password = document.createElement('input');
  password.type = 'password';
  password.id = 'password';
  password.required = true;
  password.placeholder = 'Password';
  password.className = 'form-control mb-3';

  const confirmPassword = document.createElement('input');
  confirmPassword.type = 'password';
  confirmPassword.id = 'confirmPassword';
  confirmPassword.required = true;
  confirmPassword.placeholder = 'Confirm your password';
  confirmPassword.className = 'form-control mb-3';

  const alreadyHasDiv = document.createElement('div');
  const alReadyAnAccount = document.createElement('p');
  alreadyHasDiv.innerHTML = 'Already have an account ? <a href="/login">sign in.</a>';

  const submit = document.createElement('input');
  submit.value = 'Sign up';
  submit.type = 'submit';
  submit.className = 'btn btn-primary';
  /* submit.disabled = true; */

  form.appendChild(title);
  form.appendChild(username);
  form.appendChild(password);
  form.appendChild(confirmPassword);
  form.appendChild(alreadyHasDiv);
  alreadyHasDiv.appendChild(alReadyAnAccount);
  form.appendChild(submit);
  main.appendChild(form);
}

export default RegisterPage;
