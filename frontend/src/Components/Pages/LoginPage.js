import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';

const LoginPage = () => {
  clearPage();
  renderLoginForm();
};

function renderLoginForm() {
  const main = document.querySelector('main');

  const form = document.createElement('form');
  form.className = 'p-5';

  const formDiv = document.createElement('div');
  formDiv.id = 'formDiv';

  const title = document.createElement('h1');
  title.className = 'text-center';
  title.innerHTML = 'Login';
  title.id = 'titleForm';

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

  const notYetHasDiv = document.createElement('div');
  const notYetAnAccount = document.createElement('p');
  notYetHasDiv.innerHTML = 'Not yet an account ? <a href="/register">sign up.</a>';

  const submit = document.createElement('input');
  submit.value = 'Sign up';
  submit.type = 'submit';
  submit.className = 'btn btn-primary';

  const errorMessage = document.createElement('p');
  errorMessage.id = 'errorMessage';
  errorMessage.innerHTML = '';

  form.appendChild(formDiv);
  form.appendChild(title);
  form.appendChild(username);
  form.appendChild(password);
  form.appendChild(notYetHasDiv);
  notYetHasDiv.appendChild(notYetAnAccount);
  form.appendChild(submit);
  form.appendChild(errorMessage);
  form.addEventListener('submit', onLogin);
  main.appendChild(form);
}

async function onLogin(e) {
  e.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  const options = {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch('/api/auths/login', options);
  if (!response.ok) {
    const erroM = document.querySelector('#errorMessage');
    erroM.innerHTML = 'Wrong username or wrong password';
  }
  const authenticatedUser = await response.json();
  Navigate('/');
}

export default LoginPage;
